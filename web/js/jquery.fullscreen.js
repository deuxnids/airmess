


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jQuery-FullScreen/fullscreen/jquery.fullscreen.js at master · martinaglv/jQuery-FullScreen · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe132-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (2012-05-25, TCS patched 2012-05-27, GitHub v1.0.36) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="534CE341:3B8F:13F6EF06:525C46B4" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="euZogd7l3tj5biCJDGDxfRWy5oS5h2XyzcfRGGZV+SY=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-ce4d3d1122ff6f5d3c4e8bbc3002c454a5f0861c.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-cc43a394e192dbfe81aa4563f81267f5c57f6a6a.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-5036c64d838328b79e082f548848e2898412e869.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-40d9282c5494a07cb28d2b403f06f21bfe39c327.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="6a40b3e7abb0aff2bb83a7e760c76232">

        <link data-pjax-transient rel='permalink' href='/martinaglv/jQuery-FullScreen/blob/09cfa021fe9151e325bf42a9d98ad06f3a90b646/fullscreen/jquery.fullscreen.js'>
  <meta property="og:title" content="jQuery-FullScreen"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/martinaglv/jQuery-FullScreen"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="jQuery-FullScreen - A plugin for using the browser&#39;s Full Screen API"/>

  <meta name="description" content="jQuery-FullScreen - A plugin for using the browser&#39;s Full Screen API" />

  <meta content="883717" name="octolytics-dimension-user_id" /><meta content="martinaglv" name="octolytics-dimension-user_login" /><meta content="3345193" name="octolytics-dimension-repository_id" /><meta content="martinaglv/jQuery-FullScreen" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="3345193" name="octolytics-dimension-repository_network_root_id" /><meta content="martinaglv/jQuery-FullScreen" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/martinaglv/jQuery-FullScreen/commits/master.atom" rel="alternate" title="Recent Commits to jQuery-FullScreen:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production linux vis-public  page-blob">
    <div class="wrapper">
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/signup">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fmartinaglv%2FjQuery-FullScreen%2Fblob%2Fmaster%2Ffullscreen%2Fjquery.fullscreen.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="martinaglv/jQuery-FullScreen"
      data-branch="master"
      data-sha="622e094736aa96819b5a942f2308c03e4f345b28"
  >

    <input type="hidden" name="nwo" value="martinaglv/jQuery-FullScreen" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
  <a href="/login?return_to=%2Fmartinaglv%2FjQuery-FullScreen"
  class="minibutton with-count js-toggler-target star-button entice tooltipped upwards"
  title="You must be signed in to use this feature" rel="nofollow">
  <span class="octicon octicon-star"></span>Star
</a>
<a class="social-count js-social-count" href="/martinaglv/jQuery-FullScreen/stargazers">
  129
</a>

  </li>

    <li>
      <a href="/login?return_to=%2Fmartinaglv%2FjQuery-FullScreen"
        class="minibutton with-count js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/martinaglv/jQuery-FullScreen/network" class="social-count">
        48
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/martinaglv" class="url fn" itemprop="url" rel="author"><span itemprop="title">martinaglv</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/martinaglv/jQuery-FullScreen" class="js-current-repository js-repo-home-link">jQuery-FullScreen</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/martinaglv/jQuery-FullScreen" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /martinaglv/jQuery-FullScreen">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/martinaglv/jQuery-FullScreen/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /martinaglv/jQuery-FullScreen/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/martinaglv/jQuery-FullScreen/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /martinaglv/jQuery-FullScreen/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/martinaglv/jQuery-FullScreen/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /martinaglv/jQuery-FullScreen/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/martinaglv/jQuery-FullScreen/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /martinaglv/jQuery-FullScreen/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/martinaglv/jQuery-FullScreen/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /martinaglv/jQuery-FullScreen/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/martinaglv/jQuery-FullScreen.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/martinaglv/jQuery-FullScreen.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/martinaglv/jQuery-FullScreen" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/martinaglv/jQuery-FullScreen" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



              <a href="/martinaglv/jQuery-FullScreen/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:59d3c589133c6beb7aaea478d64a45df -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/martinaglv/jQuery-FullScreen/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/martinaglv/jQuery-FullScreen/blob/master/fullscreen/jquery.fullscreen.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/martinaglv/jQuery-FullScreen" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jQuery-FullScreen</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/martinaglv/jQuery-FullScreen/tree/master/fullscreen" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">fullscreen</span></a></span><span class="separator"> / </span><strong class="final-path">jquery.fullscreen.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="fullscreen/jquery.fullscreen.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://1.gravatar.com/avatar/08f95850a6788f5870e544dd4405f8e5?d=https%3A%2F%2Fidenticons.github.com%2F3fb8395cf821f2ad363952e2ca43d65f.png&amp;s=140" width="24" />
    <span class="author"><a href="/chrisvfritz" rel="author">chrisvfritz</a></span>
    <time class="js-relative-date" datetime="2013-06-19T11:23:24-07:00" title="2013-06-19 11:23:24">June 19, 2013</time>
    <div class="commit-title">
        <a href="/martinaglv/jQuery-FullScreen/commit/16ddfc78e674ae2f645be227986185ccd278cfec" class="message" data-pjax="true" title="Updated version number to reflect recent commits">Updated version number to reflect recent commits</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>4</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="chrisvfritz" href="/martinaglv/jQuery-FullScreen/commits/master/fullscreen/jquery.fullscreen.js?author=chrisvfritz"><img height="20" src="https://1.gravatar.com/avatar/08f95850a6788f5870e544dd4405f8e5?d=https%3A%2F%2Fidenticons.github.com%2F3fb8395cf821f2ad363952e2ca43d65f.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="martinaglv" href="/martinaglv/jQuery-FullScreen/commits/master/fullscreen/jquery.fullscreen.js?author=martinaglv"><img height="20" src="https://1.gravatar.com/avatar/157d014d832aac99b5e643c813e77edd?d=https%3A%2F%2Fidenticons.github.com%2Fa0311a6a46093c06aef8f856c68f9b67.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jpetitcolas" href="/martinaglv/jQuery-FullScreen/commits/master/fullscreen/jquery.fullscreen.js?author=jpetitcolas"><img height="20" src="https://2.gravatar.com/avatar/7aa2bf0b2f00beeea88ada6abde94291?d=https%3A%2F%2Fidenticons.github.com%2F09659c321379920d381ab87d947cb229.png&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="babouaya" href="/martinaglv/jQuery-FullScreen/commits/master/fullscreen/jquery.fullscreen.js?author=babouaya"><img height="20" src="https://1.gravatar.com/avatar/0a27b96c588405947285ab026b391c8d?d=https%3A%2F%2Fidenticons.github.com%2F3df8484f9c6262bac33d64dad289aaf3.png&amp;s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://1.gravatar.com/avatar/08f95850a6788f5870e544dd4405f8e5?d=https%3A%2F%2Fidenticons.github.com%2F3fb8395cf821f2ad363952e2ca43d65f.png&amp;s=140" width="24" />
          <a href="/chrisvfritz">chrisvfritz</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://1.gravatar.com/avatar/157d014d832aac99b5e643c813e77edd?d=https%3A%2F%2Fidenticons.github.com%2Fa0311a6a46093c06aef8f856c68f9b67.png&amp;s=140" width="24" />
          <a href="/martinaglv">martinaglv</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://2.gravatar.com/avatar/7aa2bf0b2f00beeea88ada6abde94291?d=https%3A%2F%2Fidenticons.github.com%2F09659c321379920d381ab87d947cb229.png&amp;s=140" width="24" />
          <a href="/jpetitcolas">jpetitcolas</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://1.gravatar.com/avatar/0a27b96c588405947285ab026b391c8d?d=https%3A%2F%2Fidenticons.github.com%2F3df8484f9c6262bac33d64dad289aaf3.png&amp;s=140" width="24" />
          <a href="/babouaya">babouaya</a>
        </li>
      </ul>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>148 lines (120 sloc)</span>
        <span>3.625 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton disabled js-entice" href=""
                 data-entice="You must be signed in to make or propose changes">Edit</a>
          <a href="/martinaglv/jQuery-FullScreen/raw/master/fullscreen/jquery.fullscreen.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/martinaglv/jQuery-FullScreen/blame/master/fullscreen/jquery.fullscreen.js" class="button minibutton ">Blame</a>
          <a href="/martinaglv/jQuery-FullScreen/commits/master/fullscreen/jquery.fullscreen.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon js-entice" href=""
             data-entice="You must be signed in and on a branch to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * @name        jQuery FullScreen Plugin</span></div><div class='line' id='LC3'><span class="cm"> * @author      Martin Angelov, Morten Sjøgren</span></div><div class='line' id='LC4'><span class="cm"> * @version     1.2</span></div><div class='line' id='LC5'><span class="cm"> * @url         http://tutorialzine.com/2012/02/enhance-your-website-fullscreen-api/</span></div><div class='line' id='LC6'><span class="cm"> * @license     MIT License</span></div><div class='line' id='LC7'><span class="cm"> */</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'><span class="cm">/*jshint browser: true, jquery: true */</span></div><div class='line' id='LC10'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">){</span></div><div class='line' id='LC11'>	<span class="s2">&quot;use strict&quot;</span><span class="p">;</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'>	<span class="c1">// These helper functions available only to our plugin scope.</span></div><div class='line' id='LC14'>	<span class="kd">function</span> <span class="nx">supportFullScreen</span><span class="p">(){</span></div><div class='line' id='LC15'>		<span class="kd">var</span> <span class="nx">doc</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">;</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'>		<span class="k">return</span> <span class="p">(</span><span class="s1">&#39;requestFullscreen&#39;</span> <span class="k">in</span> <span class="nx">doc</span><span class="p">)</span> <span class="o">||</span></div><div class='line' id='LC18'>				<span class="p">(</span><span class="s1">&#39;mozRequestFullScreen&#39;</span> <span class="k">in</span> <span class="nx">doc</span> <span class="o">&amp;&amp;</span> <span class="nb">document</span><span class="p">.</span><span class="nx">mozFullScreenEnabled</span><span class="p">)</span> <span class="o">||</span></div><div class='line' id='LC19'>				<span class="p">(</span><span class="s1">&#39;webkitRequestFullScreen&#39;</span> <span class="k">in</span> <span class="nx">doc</span><span class="p">);</span></div><div class='line' id='LC20'>	<span class="p">}</span></div><div class='line' id='LC21'><br/></div><div class='line' id='LC22'>	<span class="kd">function</span> <span class="nx">requestFullScreen</span><span class="p">(</span><span class="nx">elem</span><span class="p">){</span></div><div class='line' id='LC23'>		<span class="k">if</span> <span class="p">(</span><span class="nx">elem</span><span class="p">.</span><span class="nx">requestFullscreen</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC24'>			<span class="nx">elem</span><span class="p">.</span><span class="nx">requestFullscreen</span><span class="p">();</span></div><div class='line' id='LC25'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">elem</span><span class="p">.</span><span class="nx">mozRequestFullScreen</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC26'>			<span class="nx">elem</span><span class="p">.</span><span class="nx">mozRequestFullScreen</span><span class="p">();</span></div><div class='line' id='LC27'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">elem</span><span class="p">.</span><span class="nx">webkitRequestFullScreen</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC28'>			<span class="nx">elem</span><span class="p">.</span><span class="nx">webkitRequestFullScreen</span><span class="p">(</span><span class="nx">Element</span><span class="p">.</span><span class="nx">ALLOW_KEYBOARD_INPUT</span><span class="p">);</span></div><div class='line' id='LC29'>		<span class="p">}</span></div><div class='line' id='LC30'>	<span class="p">}</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'>	<span class="kd">function</span> <span class="nx">fullScreenStatus</span><span class="p">(){</span></div><div class='line' id='LC33'>		<span class="k">return</span> <span class="nb">document</span><span class="p">.</span><span class="nx">fullscreen</span> <span class="o">||</span></div><div class='line' id='LC34'>				<span class="nb">document</span><span class="p">.</span><span class="nx">mozFullScreen</span> <span class="o">||</span></div><div class='line' id='LC35'>				<span class="nb">document</span><span class="p">.</span><span class="nx">webkitIsFullScreen</span> <span class="o">||</span></div><div class='line' id='LC36'>				<span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC37'>	<span class="p">}</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'>	<span class="kd">function</span> <span class="nx">cancelFullScreen</span><span class="p">(){</span></div><div class='line' id='LC40'>		<span class="k">if</span> <span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">exitFullscreen</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC41'>			<span class="nb">document</span><span class="p">.</span><span class="nx">exitFullscreen</span><span class="p">();</span></div><div class='line' id='LC42'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">mozCancelFullScreen</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC43'>			<span class="nb">document</span><span class="p">.</span><span class="nx">mozCancelFullScreen</span><span class="p">();</span></div><div class='line' id='LC44'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">webkitCancelFullScreen</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC45'>			<span class="nb">document</span><span class="p">.</span><span class="nx">webkitCancelFullScreen</span><span class="p">();</span></div><div class='line' id='LC46'>		<span class="p">}</span></div><div class='line' id='LC47'>	<span class="p">}</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>	<span class="kd">function</span> <span class="nx">onFullScreenEvent</span><span class="p">(</span><span class="nx">callback</span><span class="p">){</span></div><div class='line' id='LC50'>		<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;fullscreenchange mozfullscreenchange webkitfullscreenchange&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC51'>			<span class="c1">// The full screen status is automatically</span></div><div class='line' id='LC52'>			<span class="c1">// passed to our callback as an argument.</span></div><div class='line' id='LC53'>			<span class="nx">callback</span><span class="p">(</span><span class="nx">fullScreenStatus</span><span class="p">());</span></div><div class='line' id='LC54'>		<span class="p">});</span></div><div class='line' id='LC55'>	<span class="p">}</span></div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'>	<span class="c1">// Adding a new test to the jQuery support object</span></div><div class='line' id='LC58'>	<span class="nx">$</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">fullscreen</span> <span class="o">=</span> <span class="nx">supportFullScreen</span><span class="p">();</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'>	<span class="c1">// Creating the plugin</span></div><div class='line' id='LC61'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">fullScreen</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">props</span><span class="p">){</span></div><div class='line' id='LC62'>		<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">support</span><span class="p">.</span><span class="nx">fullscreen</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">length</span> <span class="o">!==</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC63'>			<span class="c1">// The plugin can be called only</span></div><div class='line' id='LC64'>			<span class="c1">// on one element at a time</span></div><div class='line' id='LC65'><br/></div><div class='line' id='LC66'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC67'>		<span class="p">}</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'>		<span class="k">if</span><span class="p">(</span><span class="nx">fullScreenStatus</span><span class="p">()){</span></div><div class='line' id='LC70'>			<span class="c1">// if we are already in fullscreen, exit</span></div><div class='line' id='LC71'>			<span class="nx">cancelFullScreen</span><span class="p">();</span></div><div class='line' id='LC72'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC73'>		<span class="p">}</span></div><div class='line' id='LC74'><br/></div><div class='line' id='LC75'>		<span class="c1">// You can potentially pas two arguments a color</span></div><div class='line' id='LC76'>		<span class="c1">// for the background and a callback function</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'>		<span class="kd">var</span> <span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC79'>			<span class="s1">&#39;background&#39;</span>      <span class="o">:</span> <span class="s1">&#39;#111&#39;</span><span class="p">,</span></div><div class='line' id='LC80'>			<span class="s1">&#39;callback&#39;</span>        <span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">noop</span><span class="p">(</span> <span class="p">),</span></div><div class='line' id='LC81'>			<span class="s1">&#39;fullscreenClass&#39;</span> <span class="o">:</span> <span class="s1">&#39;fullScreen&#39;</span></div><div class='line' id='LC82'>		<span class="p">},</span> <span class="nx">props</span><span class="p">),</span></div><div class='line' id='LC83'><br/></div><div class='line' id='LC84'>		<span class="nx">elem</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC85'><br/></div><div class='line' id='LC86'>		<span class="c1">// This temporary div is the element that is</span></div><div class='line' id='LC87'>		<span class="c1">// actually going to be enlarged in full screen</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'>		<span class="nx">fs</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;div&gt;&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC90'>			<span class="s1">&#39;css&#39;</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC91'>				<span class="s1">&#39;overflow-y&#39;</span> <span class="o">:</span> <span class="s1">&#39;auto&#39;</span><span class="p">,</span></div><div class='line' id='LC92'>				<span class="s1">&#39;background&#39;</span> <span class="o">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">background</span><span class="p">,</span></div><div class='line' id='LC93'>				<span class="s1">&#39;width&#39;</span>      <span class="o">:</span> <span class="s1">&#39;100%&#39;</span><span class="p">,</span></div><div class='line' id='LC94'>				<span class="s1">&#39;height&#39;</span>     <span class="o">:</span> <span class="s1">&#39;100%&#39;</span></div><div class='line' id='LC95'>			<span class="p">}</span></div><div class='line' id='LC96'>		<span class="p">})</span></div><div class='line' id='LC97'>			<span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">elem</span><span class="p">)</span></div><div class='line' id='LC98'>			<span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">elem</span><span class="p">);</span></div><div class='line' id='LC99'><br/></div><div class='line' id='LC100'>		<span class="c1">// You can use the .fullScreen class to</span></div><div class='line' id='LC101'>		<span class="c1">// apply styling to your element</span></div><div class='line' id='LC102'>		<span class="nx">elem</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span> <span class="nx">options</span><span class="p">.</span><span class="nx">fullscreenClass</span> <span class="p">);</span></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'>		<span class="c1">// Inserting our element in the temporary</span></div><div class='line' id='LC105'>		<span class="c1">// div, after which we zoom it in fullscreen</span></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'>		<span class="nx">requestFullScreen</span><span class="p">(</span><span class="nx">fs</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="mi">0</span><span class="p">));</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>		<span class="nx">fs</span><span class="p">.</span><span class="nx">click</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span></div><div class='line' id='LC110'>			<span class="k">if</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">target</span> <span class="o">==</span> <span class="k">this</span><span class="p">){</span></div><div class='line' id='LC111'>				<span class="c1">// If the black bar was clicked</span></div><div class='line' id='LC112'>				<span class="nx">cancelFullScreen</span><span class="p">();</span></div><div class='line' id='LC113'>			<span class="p">}</span></div><div class='line' id='LC114'>		<span class="p">});</span></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'>		<span class="nx">elem</span><span class="p">.</span><span class="nx">cancel</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC117'>			<span class="nx">cancelFullScreen</span><span class="p">();</span></div><div class='line' id='LC118'>			<span class="k">return</span> <span class="nx">elem</span><span class="p">;</span></div><div class='line' id='LC119'>		<span class="p">};</span></div><div class='line' id='LC120'><br/></div><div class='line' id='LC121'>		<span class="nx">onFullScreenEvent</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">fullScreen</span><span class="p">){</span></div><div class='line' id='LC122'>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">fullScreen</span><span class="p">){</span></div><div class='line' id='LC123'>				<span class="c1">// We have exited full screen.</span></div><div class='line' id='LC124'>			        <span class="c1">// Detach event listener</span></div><div class='line' id='LC125'>			        <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">off</span><span class="p">(</span> <span class="s1">&#39;fullscreenchange mozfullscreenchange webkitfullscreenchange&#39;</span> <span class="p">);</span></div><div class='line' id='LC126'>				<span class="c1">// Remove the class and destroy</span></div><div class='line' id='LC127'>				<span class="c1">// the temporary div</span></div><div class='line' id='LC128'><br/></div><div class='line' id='LC129'>				<span class="nx">elem</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span> <span class="nx">options</span><span class="p">.</span><span class="nx">fullscreenClass</span> <span class="p">).</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">fs</span><span class="p">);</span></div><div class='line' id='LC130'>				<span class="nx">fs</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC131'>			<span class="p">}</span></div><div class='line' id='LC132'><br/></div><div class='line' id='LC133'>			<span class="c1">// Calling the facultative user supplied callback</span></div><div class='line' id='LC134'>			<span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">callback</span><span class="p">(</span><span class="nx">fullScreen</span><span class="p">);</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC137'>		<span class="p">});</span></div><div class='line' id='LC138'><br/></div><div class='line' id='LC139'>		<span class="k">return</span> <span class="nx">elem</span><span class="p">;</span></div><div class='line' id='LC140'>	<span class="p">};</span></div><div class='line' id='LC141'><br/></div><div class='line' id='LC142'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">cancelFullScreen</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC143'>			<span class="nx">cancelFullScreen</span><span class="p">();</span></div><div class='line' id='LC144'><br/></div><div class='line' id='LC145'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC146'>	<span class="p">};</span></div><div class='line' id='LC147'><span class="p">}(</span><span class="nx">jQuery</span><span class="p">));</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.01949s from github-fe132-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/martinaglv/jQuery-FullScreen/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

