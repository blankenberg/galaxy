<%namespace name="ie" file="ie.mako" />
<%
    ie_request.load_deploy_config()

    # Make the dataset available inside the container
    profile_db_dataset = ie_request.volume('/input/profile_db', profile_db.extra_files_path, mode='ro')
    contig_db_dataset = ie_request.volume('/input/contig_db', contig_db.extra_files_path, mode='ro')

    ie_request.launch(
       image = trans.request.params.get('image_tag', None),
       volumes = [profile_db_dataset,contig_db_dataset]
    )

    url = ie_request.url_template('${PROXY_URL}')
%>
<html>
<head>
    ${ ie.load_default_js() }
</head>
<body>
<script type="text/javascript">

    ${ ie.default_javascript_variables() }
    var url = '${ url }';
    ${ ie.plugin_require_config() }

    requirejs(['galaxy.interactive_environments'], function (IES) {
        $( document ).ready(function() {
            IES.keepAlive(url);
            IES.test_ie_availability(url, function() {
                IES.append_notebook(url);
            });
        });
    });

</script>
<div id="main" width="100%" height="100%">
</div>
</body>
</html>