<template>
  <div>
       <div class="master-column-wrapper container">
    <div class="row">
      <div class="breadcrumb">
        <ul>
          <li><a href="index.html">Home</a></li>
			<li><a href="index.html">Living Green</a></li>
          <li>Post 1</li>
        </ul>
      </div>
      <!-- breadcrumb --> 
    </div>
    <!-- row -->
    
    <div class="row"> 
      
      <!-- BLOG POSTS -->
      <div class="col-md-9 posts">
        <div class="blog-section-description">
          <div class="post-head">
            <h3 class="post-title"><a href="">{{ article.title }}</a></h3>
             <!-- <h1>{{ article.title }}</h1> -->
            <span class="post-date">Thursday, July 26, 2018</span> </div>
          <!-- post-head -->
          
          <div class="post-body">
            <div
          v-if="article.content"
          id="editor"
          v-html="$md.render(article.content)"
        />   
      3 <div
          v-if="article.content"
          id="editor"
          v-html="$md.render(article.content)"
        /> </div>
          <!-- post-body -->
          
          <div class="post-details">
            <div class="tags"> <span>Tags:</span>
              <ul>
                <li><a href="/blog/tag/e-commerce">e-commerce</a></li>
              </ul>
            </div>
            <!-- tags -->
            
            <div class="comments"> <a href="#comments" class="read-comments">Comments (1)</a> </div>
            <!-- comments --> 
          </div>
          <!-- post-details --> 
          
        </div>
        <!-- section-description -->
        
        <div class="fieldset new-comment" id="comments">
          <div class="title">
            <h4>Leave your comment</h4>
          </div>
          <div class="notifications"></div>
          <form method="post" action="/why-your-online-store-needs-a-wish-list">
            <div class="form-fields">
              <div class="form-group">
                <label for="AddNewComment_CommentText">Comment:</label>
                <textarea class="form-control enter-comment-text" id="AddNewComment_CommentText" name="AddNewComment.CommentText" rows="6"></textarea>
                <span class="field-validation-valid" data-valmsg-for="AddNewComment.CommentText" data-valmsg-replace="true"></span></div>
            </div>
            <div class="buttons">
              <input type="submit" name="add-comment" class="btn btn-secondary blog-post-add-comment-button" value="New comment">
            </div>
            <input name="__RequestVerificationToken" type="hidden" value="CfDJ8E3BBJK9BHJAn3Jilmp3ZXs0x9B1yOrWO1AA00I_J1wU7er0ILr29tH9fd49f4yeorjqDo1bpt9_0kdO-fDgun3vdwKPCO-1WxLX32AKwtdclmEqx_lK3z_jI0qJga6imfpbKRQbbKZMnKlVnIZmm6U">
          </form>
        </div>
		  
        <div class="comment-list">
          <div class="title"><h4>Comments</h4>
		</div>
          <div class="comments">
			  <table class="table table-bordered">
					<thead class="thead-light">
						<tr class="user-info">
							<th class="username">Username</th>
							<th class="comment-time">
									<span>Created on:</span>
									<span class="stat-value">7/26/2018 7:20 AM</span>
							</th>
						</tr>
					</thead>
					<tr>
						<th></th>
						<th class="comment-body">This is a sample comment for this blog post</th>
					</tr>
				</table>
			    <table class="table table-bordered">
					<thead class="thead-light">
						<tr class="user-info">
							<th scope="row" class="username">Username</th>
							<th scope="row" class="comment-time">
									<span>Created on:</span>
									<span class="stat-value">7/26/2018 7:20 AM</span>
							</th>
						</tr>
					</thead>
					<tr>
						<th></th>
						<th class="comment-body"><p>Lorem ipsum dolor sit met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a liqua. Ut enim ad minim venom, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comido consequat. est labour. Sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a liqua. Ut enim ad minim venom, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comido consequat. est labour. Sed do eiusmod tempor incididunt ut labore et dolore magna. </p></th>
					</tr>
				</table>
			    <table class="table table-bordered">
					<thead class="thead-light">
						<tr class="user-info">
							<th class="username">Username</th>
							<th class="comment-time">
									<span>Created on:</span>
									<span class="stat-value">7/26/2018 7:20 AM</span>
							</th>
						</tr>
					</thead>
					<tr>
						<th></th>
						<th class="comment-body">This is a sample comment for this blog post</th>
					</tr>
				</table>
			    <table class="table table-bordered">
					<thead class="thead-light">
						<tr class="user-info">
							<th class="username">Username</th>
							<th class="comment-time">
									<span>Created on:</span>
									<span class="stat-value">7/26/2018 7:20 AM</span>
							</th>
						</tr>
					</thead>
					<tr>
						<th></th>
						<th class="comment-body">This is a sample comment for this blog post</th>
					</tr>
				</table>
			</div>
		  </div>
			 
		  
      </div>
		
	
      <!-- posts --> 
      
      <!-- SIDEBAR -->
      <div class="col-md-3 sidebar">
        <div class="signup-form-header">
          <form>
            <h2>Enter your zip code to find the prices and plans that are right for you</h2>
            <input id="zip" class="form-control" name="zip" type="text" pattern="[0-9]*">
            <div class="form-check form-check-inline">
              <input type="radio" id="resi" class="form-check-input" name="BtnActType" value="Residential" checked="">
              <label class="form-check-label" for="resi">Residential</label>
            </div>
            <div class="form-check form-check-inline">
              <input type="radio" id="comm" class="form-check-input" name="BtnActType" value="Commercial">
              <label class="form-check-label" for="comm">Commercial</label>
            </div>
            <button onclick="window.location.href = 'rates-plans-wrates.html';" type="button" class="btn btn-secondary">Sign Up Today!</button>
          </form>
        </div>
        <div class="block block-popular-blogtags">
          <div class="title">
            <h3>Tags</h3>
          </div>
          <div class="listbox">
            <ul class="tags">
              <li><a href="#">Green</a></li>
              <li><a href="#">Energy</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Hydro</a></li>
              <li><a href="#">Wind</a></li>
              <li><a href="#">Solar</a></li>
            </ul>
          </div>
          <!-- listbox --> 
        </div>
        <!-- block --> 
      </div>
    </div>
    <!-- row --> 
  </div>



     <mdb-card 
     v-if="article.image"
      id="banner"
      class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)"
      :data-src="getStrapiMedia(article.image.url)"
      uk-img
    > 
   <div class="text-white text-center py-5 px-4 my-5">
      <h1>{{ article.title }}</h1>
       </div>
       </mdb-card>
  

    <div class="uk-section">
      <div class="uk-container uk-container-small">
        <!-- eslint-disable vue/no-v-html -->
        <div
          v-if="article.content"
          id="editor"
          v-html="$md.render(article.content)"
        />
        <!-- eslint-enable vue/no-v-html -->
        <p v-if="article.published_at">
          {{ moment(article.published_at).format("MMM Do YY") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { getStrapiMedia } from "~/utils/medias";
import { getMetaTags } from "~/utils/seo";
 import { mdbCard, mdbBtn } from 'mdbvue';
export default {
   layout: 'blog',
  async asyncData({ $strapi, params }) {
    const matchingArticles = await $strapi.find("articles", {
      slug: params.slug,
    });
    return {
      article: matchingArticles[0],
      global: await $strapi.find("global"),
    };
  },
  data() {
    return {
      apiUrl: process.env.strapiBaseUri,
    };
  },
  methods: {
    moment,
    getStrapiMedia,
  },
  components: {
      mdbCard,
      mdbBtn
    },
  head() {
    const { defaultSeo, favicon, siteName } = this.global;

    // Merge default and article-specific SEO data
    const fullSeo = {
      ...defaultSeo,
      metaTitle: this.article.title,
      metaDescription: this.article.description,
      shareImage: this.article.image,
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
