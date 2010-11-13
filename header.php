<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <title>Untitled</title>
    <meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1">
    <meta name="apple-mobile-web-app-capable" content="YES">

		<link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/style.css" type="text/css" media="screen" title="no title" charset="utf-8">
	<script src="<?php bloginfo('stylesheet_directory'); ?>/javascript.js" type="text/javascript" charset="utf-8"></script>
	<script src="<?php bloginfo('stylesheet_directory'); ?>/iscroll-min.js" type="text/javascript" charset="utf-8"></script>

	</head>
	<body onload="start()">
		<div id="main">
			<div id="header">
				<div id="pageTitle"><?php bloginfo('name'); ?></div>
				<div id="next"></div>
				<div id="back">
					<div class="one"></div>
					<div class="two"></div>
					<div class="three">
						<div class="title">Latest Posts</div>
					</div>
				</div>
			</div>
			<div id="navigation">
				<div id="scroll" class="content" name="0">
