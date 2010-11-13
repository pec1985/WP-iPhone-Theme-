<?php get_header(); ?>


<div class="content" name="0">
	<div class="tableHeader">Latest Blog Posts</div>
	<ul class="list">

	
	<?php $access_key = 1; ?>
	<?php $x = 0; if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
	
		<li class="listRowTemplate_template" <?php if($x!=0){ echo 'style="border-top-width:1px"';}?> onclick="nextPage(event,'<?php the_permalink() ?>');">
			<div class="label_template"><?php the_title(); ?></div>
			<div class="button"></div>
		</li>
	
	
		<?php $x=$x+1;endwhile; else: ?>
	
		<li class="listRowTemplate_template");">
			<div class="label_template">Sorry, no posts matched your criteria.</div>
		</li>
	
	<?php endif; ?>
						</ul>
					
<?php get_footer(); ?>