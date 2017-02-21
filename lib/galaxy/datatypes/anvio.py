"""
Datatypes for Anvi'o
https://github.com/merenlab/anvio
"""
import logging
import sys
import shutil
import os

from galaxy.datatypes.text import Html
from galaxy.util import FILENAME_VALID_CHARS

log = logging.getLogger(__name__)
verbose = True


class AnvioComposite( Html ):
    """
    Base class to use for Anvi'o composite datatypes.
    Generally consist of a sqlite database, plus optional additional files
    """
    file_ext = "anvio_composite"
    composite_type = 'auto_primary_file'

    def generate_primary_file( self, dataset=None) :
        """
        This is called only at upload to write the html file
        cannot rename the datasets here - they come with the default unfortunately
        """
        rval = [
            "<html><head><title>Files for Anvi'o Composite Dataset (%s)</title></head><p/>\
            This composite dataset is composed of the following files:<p/><ul>" % (
                self.file_ext)]
        for composite_name, composite_file in self.get_composite_files(dataset=dataset).iteritems():
            opt_text = ''
            if composite_file.optional:
                opt_text = ' (optional)'
            rval.append('<li><a href="%s">%s</a>%s' % (composite_name, composite_name, opt_text))
        rval.append('</ul></html>')
        return "\n".join(rval)

    def get_mime(self):
        """Returns the mime type of the datatype"""
        return 'text/html'

    def set_peek(self, dataset, is_multi_byte=False):
        """Set the peek and blurb text"""
        if not dataset.dataset.purged:
            dataset.peek = 'Anvio database (multiple files)'
            dataset.blurb = 'Anvio database (multiple files)'
        else:
            dataset.peek = 'file does not exist'
            dataset.blurb = 'file purged from disk'

    def display_peek(self, dataset):
        """Create HTML content, used for displaying peek."""
        try:
            return dataset.peek
        except Exception:
            return "Anvio database (multiple files)"

    def display_data(self, trans, data, preview=False, filename=None,
                     to_ext=None, size=None, offset=None, **kwd):
        """Documented as an old display method, but still gets called via tests etc
        This allows us to format the data shown in the central pane via the "eye" icon.
        """
        print 'display_data', preview, type(preview)
        print 'kwd', kwd
        if not preview:
            trans.response.set_content_type(data.get_mime())
            trans.log_event("Display dataset id: %s" % str(data.id))

            # the target directory name
            Anvio_dir_name = '/dataset_{}_files/Anviodb'.format(data.dataset.id)
            dir_name = str(os.path.dirname(trans.app.object_store.get_filename(data.dataset))) + Anvio_dir_name

            # generate unique filename for this dataset
            fname = ''.join(c in FILENAME_VALID_CHARS and c or '_' for c in data.name)[0:150]

            # zip the target directory (dir_name) using the fname
            shutil.make_archive(fname, 'zip', dir_name)
            download_zip = fname + '.zip'

            # setup headers for the download
            trans.response.headers['Content-Length'] = int(os.stat(download_zip).st_size)
            # force octet-stream so Safari doesn't append mime extensions to filename
            trans.response.set_content_type("application/octet-stream")
            trans.response.headers["Content-Disposition"] = 'attachment; filename="Galaxy%s-[%s].%s"' % \
                                                            (data.hid, download_zip, "zip")
            return open(download_zip)
        return super( AnvioComposite, self ).display_data( trans, data, preview=preview, filename=filename,
            to_ext=to_ext, size=size, offset=offset, **kwd)

#class AnvioDB( AnvioComposite ):
#    """
#    Base class to use for Anvi'o Database datatypes.
#    Generally consist of a sqlite database, plus optional additional files
#    """
#    file_ext = "anvio_db"


class AnvioContigsDB( AnvioComposite ):
    """Class for AnvioDB database files."""
    file_ext = 'anvio_contigs_db'
    composite_type = 'auto_primary_file'
    allow_datatype_change = False

    def __init__( self, *args, **kwd ):
        super( AnvioContigsDB, self ).__init__( *args, **kwd )
        self.add_composite_file('CONTIGS.db', is_binary=True, optional=False)
        self.add_composite_file('CONTIGS.h5', is_binary=True, optional=False)


class AnvioProfileDB( AnvioComposite ):
    """Class for AnvioDB database files."""
    file_ext = 'anvio_profile_db'
    composite_type = 'auto_primary_file'
    allow_datatype_change = False

    def __init__( self, *args, **kwd ):
        super( AnvioProfileDB, self ).__init__( *args, **kwd )
        self.add_composite_file('PROFILE.db', is_binary=True, optional=False)
        self.add_composite_file('RUNINFO.cp', is_binary=True, optional=True)
        self.add_composite_file('RUNINFO.mcp', is_binary=True, optional=True)
        self.add_composite_file('AUXILIARY_DATA.h5', is_binary=True, optional=True)
        self.add_composite_file('RUNLOG.txt', is_binary=False, optional=True)

class AnvioSamplesDB( AnvioComposite ):
    """Class for AnvioDB database files."""
    file_ext = 'anvio_samples_db'
    composite_type = 'auto_primary_file'
    allow_datatype_change = False

    def __init__( self, *args, **kwd ):
        super( AnvioSamplesDB, self ).__init__( *args, **kwd )
        self.add_composite_file('SAMPLES.db', is_binary=True, optional=False)


if __name__ == '__main__':
    import doctest
    doctest.testmod(sys.modules[__name__])
