class PostController < ApplicationController
	before_action :get_posts, only: [:index]
	def index
	end

	def create
		@post = Post.new(post_params)

    respond_to do |format|
      if @post.save
        format.json { render json: @post }
      else
        format.json { render json: @team.errors, status: :unprocessable_entity }
      end
    end
	end

	private

	def post_params
		params.require(:post).permit(:title, :content)
	end

	def get_posts
		@posts = Post.all
	end

end
