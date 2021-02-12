<template>
<!-- BLOG POSTS -->
	<div class="col-md-9 posts">
		<div class="row post blog-section-description-row">
        	
			<div class="col-md-4">
				<div class="blog-section-description-thumbnail-wrap">
                	<div class="blog-section-description-thumbnail">
				    	<img src="images/blog-img.webp" alt="Blog Images">
			  		</div><!-- section-description-thumbnail --> 
            	</div><!-- section-description-thumbnail-wrap --> 
			</div><!-- col-md-6 -->
			
			<div class="col-md-8">
				<div class="blog-section-description">
					
					<div class="post-head">
						<h3 class="post-title"><a href="">Blog Post 1</a></h3>
						<span class="post-date">Thursday, July 26, 2018</span>
				   </div><!-- post-head -->
					
						 <div class="post-details">
                		<div class="tags">
                  		<span>Tags:</span>
                  			<ul>
                    			<li><a href="/blog/tag/e-commerce">e-commerce</a></li>
                  			</ul>
                		</div><!-- tags -->
                
				  		<div class="comments">
							<a href="#comments" class="read-comments">Comments (1)</a>
						</div><!-- comments -->
              		</div><!-- post-details --> 
					
					<div class="post-body">
                		<p>Lorem ipsum dolor sit met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a liqua. Ut enim ad minim venom, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comido consequat. est labour. Sed do eiusmod tempor incididunt ut labore et dolore magna. </p>
                		<a class="readmore" href="post.html">Read More &rsaquo;</a>
					</div><!-- post-body -->
					
					
				
				</div><!-- section-description -->
				
			</div><!-- col-md-6 -->
    
    <mdb-container>
      <div class="container">
        <h1>{{ homepage.hero.title }}</h1>
        <Articles :articles="articles" />
      </div>
    </mdb-container>
  </div>
</div><!-- post -->

  
</template>

<script>
import Articles from "~/components/Articles";
import { getMetaTags } from "~/utils/seo";
import { getStrapiMedia } from "~/utils/medias";

export default {
  layout: 'blog',
  components: {
    Articles,
  },
  async asyncData({ $strapi }) {
    return {
      articles: await $strapi.find("articles"),
      homepage: await $strapi.find("homepage"),
      global: await $strapi.find("global"),
    };
  },
  head() {
    const { seo } = this.homepage;
    const { defaultSeo, favicon, siteName } = this.global;

    // Merge default and article-specific SEO data
    const fullSeo = {
      ...defaultSeo,
      ...seo,
    };

    return {
      titleTemplate: `%s | ${siteName}`,
      title: fullSeo.metaTitle,
      meta: getMetaTags(fullSeo),
      link: [
        {
          rel: "favicon",
          href: getStrapiMedia(favicon.url),
        },
      ],
    };
  },
};
</script>
