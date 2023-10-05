import CommentForm from '../forms/CommentForm';
import { incrementLikes, decrementLikes } from '../../redux/slices/blogsSlice';
import { useDispatch } from 'react-redux';
import CommentsContainer from './singleBlog/CommentsContainer';



const BlogComment = (props) => {

	const dispatch = useDispatch();
	const { id, author, title, description, hashtags, date, like, editable, comments } = props;


	const handleClick = (blogID, action) => {
		switch (action) {
			case 'increment': {
				dispatch(incrementLikes({ blogID: id }))
				break;
			}
			case 'decrement': {
				dispatch(decrementLikes({ blogID: id }))
				break;
			}

		}
	}


	return (
		<div className="flex flex-col gap-y-1">
			<div className="bg-slate-200 p-6 rounded-lg">

				<div className="bg-white p-4 rounded-lg">
					<h3 className="text-xl text-center">{title}</h3>

					<hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-2"></hr>

					<p className="break-all">{description}</p>

				</div>

				<div className='text-center mt-4 flex justify-center items-center'>
					<button
						id="like"
						type="button"
						onClick={() => { handleClick(id, 'increment') }}
						className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
							<path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
						</svg>
					</button>
					<p className="py-2.5 px-5 mr-2 mb-2 w-[64px] text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200">{like}</p>
					<button
						id="dislike"
						type="button"
						onClick={() => { handleClick(id, 'decrement') }}
						className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
							<path d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z" />
						</svg>
					</button>
				</div>

				<hr className="h-px my-2 bg-gray-200 border-0"></hr>

				<div className="flex flex-wrap justify-start">
					{hashtags?.map((hashtag) => {
						return (
							<div className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2">{`#${hashtag}`}</div>
						)
					})}

				</div>
			</div>
			{<CommentsContainer comments={comments} />}
			<CommentForm blogID={id} />
		</div>
	)
}

export default BlogComment;