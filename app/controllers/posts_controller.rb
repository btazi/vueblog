class PostController < ApplicationController
	before_action :get_posts, only: [:index]
	def index
	end

	private

	def get_posts
		@posts = Post.all
	end
end
