
			
				<?php if (is_category()) { ?>
					<div class="tableHeader"><?php single_cat_title(); ?> Archives</div>
				<?php } elseif (is_day()) { ?>
					<div class="tableHeader">Archive for <?php the_time('F jS, Y'); ?></div>
				<?php } elseif (is_month()) { ?>
					<div class="tableHeader">Archive for <?php the_time('F, Y'); ?></div>
				<?php } elseif (is_year()) { ?>
					<div class="tableHeader">Archive for <?php the_time('Y'); ?></div>
				<?php } ?>
			
				<ul class="list">			
					<?php $access_key = 1; ?>
					<?php $x = 0; if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
						<li <?php if($x!=0){ echo 'style="border-top-width:1px"';}?> onclick="nextPage(event,'<?php the_permalink() ?>');">
							<div class="label_template"><?php the_title(); ?></div>
							<div class="button"></div>
						</li>
					<?php $x=$x+1;endwhile; else: ?>
						<li>
							<div class="label_template">Sorry, no posts matched your criteria.</div>
						</li>

					<?php endif; ?>
		
				</ul>
		
