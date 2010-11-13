<?php
	if (isset($_GET['comments'])) {
		if (have_posts()): while (have_posts()): the_post();
			comments_template();
		endwhile; endif;
	}
	else if (isset($_GET['postcomment'])) {
		if (have_posts()): while (have_posts()): the_post();
			comments_template('/postcomment.php');
		endwhile; endif;
	}
	else {
?>
<?php if (have_posts()): while (have_posts()): the_post(); ?>

<div class="tableHeader"><?php the_title(); ?></div>
<div id="detailBox">
	<?php the_content(); ?>
</div>			
	
<?php
			endwhile; else: ?>
			
			<div id="infoblock">
				<h2>Page Not Found</h2>
			</div>
			
			<div class="post">
				<p>Sorry, The page you are looking for cannot be found!</p>
			</div>
			
			<?php endif; ?>

		
<?php
	}
?>