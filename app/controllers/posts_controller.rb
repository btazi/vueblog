class PostsController < ApplicationController
	before_action :get_posts, only: [:index]
	before_action :get_post, only: [:show, :destroy]

	def index
		render json: @posts
	end

	def show
		render json: @post
	end

	def destroy
		@post.delete
	end

	def create
		@post = Post.new(post_params)

    respond_to do |format|
      if @post.save
        format.json { render json: @post }
      else
        format.json { render json: @post.errors, status: :unprocessable_entity }
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

	def get_post
		@post = Post.find(params[:id])
	end

end
