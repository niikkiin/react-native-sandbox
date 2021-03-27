import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'ADD_BLOG_POST':
			return [
				...state,
				{
					id: Math.floor(Math.random() * 99999),
					title: payload.title,
					content: payload.content
				},
			];
		case 'DELETE_BLOG_POST':
			return state.filter((blogPost) => blogPost.id !== payload);
		default:
			return state;
	}
};

const addBlogPost = (dispatch) => {
	return (title, content) => {
		dispatch({ type: 'ADD_BLOG_POST', payload: { title, content } });
	};
};

const deleteBlogPost = (dispatch) => {
	return (id) => {
		dispatch({ type: 'DELETE_BLOG_POST', payload: id });
	};
};

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, []);

// import React, { useReducer } from 'react';

// const BlogContext = React.createContext();

// const blogReducer = (state, action) => {
//   const { type  } = action;
//   switch(type) {
//     case 'ADD_BLOG_POST':
//       return [...state, { title: `Blog Post #${state.length + 1}`}];
//     default:
//       return state;
//   }
// }

// export const BlogProvider = ({ children }) => {
// 	const [blogPosts, dispatch] = useReducer(blogReducer, []);

//   const addBlogPost = () => {
//     dispatch({ type: 'ADD_BLOG_POST'});
//   };

// 	return (
// 		<BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>{children}</BlogContext.Provider>
// 	);
// };

// export default BlogContext;

// import React, { useState } from 'react';

// const BlogContext = React.createContext();

// export const BlogProvider = ({ children }) => {
// 	const [blogPosts, setBlogPosts] = useState([]);

// 	const addBlogPost = () => {
// 		setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
// 	};

// 	return (
// 		<BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>{children}</BlogContext.Provider>
// 	);
// };

// export default BlogContext;
