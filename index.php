<?php get_header(); ?>

<div id="scroll1" class="content" name="0">
	<div class="tableHeader">Latest Blog Posts</div>
	<ul class="list">		
	<?php $access_key = 1; ?>
	<?php $x = 0; if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
		<li <?php if($x!=0){ echo 'style="border-top-width:1px"';}?> onclick="nextPage(event,'<?php the_permalink() ?>');">
			<div class="label_template"><?php the_title(); ?></div>
			<div class="button"></div>
		</li>
	<?php $x++;endwhile; else: ?>
		<li>
			<div class="label_template">Sorry, no posts matched your criteria.</div>
		</li>
	
	<?php endif; ?>
	</ul>
	</div>
	

<div id="scroll2" class="content" name="0">

<?php // get category IDs of Featured, Uncategorized and Personal for exclusion 
$categories_to_exclude = get_cat_ID('uncategorized'); 
// get category IDs for all subcategories (categories where parent is not 0) for exclusion 
$subcats = $wpdb->get_results("SELECT term_id FROM $wpdb->term_taxonomy WHERE taxonomy='Category' AND parent>0"); 
foreach ((array)$subcats as $subcat) { $categories_to_exclude .= ','.$subcat->term_id; } 
// get all categories minus excluded categories 
$cats = get_categories('exclude='.$categories_to_exclude.'&amp;orderyby=name&amp;hide_empty=0'); ?> 
	<div class="tableHeader">Categories</div>
 	<ul class="list">		
 <?php $x = 0;foreach ((array)$cats as $category) { ?> 
	<li <?php if($x!=0){ echo 'style="border-top-width:1px"';}?> onclick="nextPage(event,'<?php echo "?cat=".$category->cat_ID; ?>');">
		<div class="label_template"><?php echo $category->cat_name; ?></div>
		<div class="button"></div>
	</li>
<?php /*?>
    <li class="category_box"><h5 class="category_title"><?php echo $category->cat_name; ?></h5> 
            <div class="category_description">"<?php echo $category->category_description.'cat='.$category->cat_ID; ?>" </div> 
 
 
    </li> 
 */ ?>
<?php 
$x++;
} ?> 
	</ul>
</div>

<?php get_footer(); ?>