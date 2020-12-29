import express from "express";
const router = express.Router();
import pkg from "express-validator";
const { check, validationResult } = pkg;
import Todo from "../models/Todo.js";
import asyncHandler from "express-async-handler";
// @route    POST api/posts
// @desc     Create a todo list item
// @access   public
router.post(
  "/",
  [check("text", "Text is required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const newTodo = new Todo({
        text: req.body.text,
      });

      const todo = await newTodo.save();
      console.log(todo);
      res.json(todo);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// // @route    GET api/todos
// // @desc     Get all todos
// // @access   Public
//get all todos
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const todos = await Todo.find({});
    res.json(todos);
  })
);

// // @route    GET api/posts/:id
// // @desc     Get post by ID
// // @access   Private
// router.get("/:id", [auth, checkObjectId("id")], async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     if (!post) {
//       return res.status(404).json({ msg: "Post not found" });
//     }

//     res.json(post);
//   } catch (err) {
//     console.error(err.message);

//     res.status(500).send("Server Error");
//   }
// });

// @route    DELETE api/todos/:id
// @desc     Delete a post
// @access   public
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ msg: "Todo not found" });
    }

    await todo.remove();

    res.json({ msg: "Todo removed" });
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// // @route    PUT api/posts/like/:id
// // @desc     Like a post
// // @access   Private
// router.put("/like/:id", [auth, checkObjectId("id")], async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     // Check if the post has already been liked
//     if (post.likes.some((like) => like.user.toString() === req.user.id)) {
//       return res.status(400).json({ msg: "Post already liked" });
//     }

//     post.likes.unshift({ user: req.user.id });

//     await post.save();

//     return res.json(post.likes);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

// // @route    PUT api/posts/unlike/:id
// // @desc     Unlike a post
// // @access   Private
// router.put("/unlike/:id", [auth, checkObjectId("id")], async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     // Check if the post has not yet been liked
//     if (!post.likes.some((like) => like.user.toString() === req.user.id)) {
//       return res.status(400).json({ msg: "Post has not yet been liked" });
//     }

//     // remove the like
//     post.likes = post.likes.filter(
//       ({ user }) => user.toString() !== req.user.id
//     );

//     await post.save();

//     return res.json(post.likes);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

// // @route    POST api/posts/comment/:id
// // @desc     Comment on a post
// // @access   Private
// router.post(
//   "/comment/:id",
//   [
//     auth,
//     checkObjectId("id"),
//     [check("text", "Text is required").not().isEmpty()],
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//       const user = await User.findById(req.user.id).select("-password");
//       const post = await Post.findById(req.params.id);

//       const newComment = {
//         text: req.body.text,
//         name: user.name,
//         avatar: user.avatar,
//         user: req.user.id,
//       };

//       post.comments.unshift(newComment);

//       await post.save();

//       res.json(post.comments);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send("Server Error");
//     }
//   }
// );

// // @route    DELETE api/posts/comment/:id/:comment_id
// // @desc     Delete comment
// // @access   Private
// router.delete("/comment/:id/:comment_id", auth, async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     // Pull out comment
//     const comment = post.comments.find(
//       (comment) => comment.id === req.params.comment_id
//     );
//     // Make sure comment exists
//     if (!comment) {
//       return res.status(404).json({ msg: "Comment does not exist" });
//     }
//     // Check user
//     if (comment.user.toString() !== req.user.id) {
//       return res.status(401).json({ msg: "User not authorized" });
//     }

//     post.comments = post.comments.filter(
//       ({ id }) => id !== req.params.comment_id
//     );

//     await post.save();

//     return res.json(post.comments);
//   } catch (err) {
//     console.error(err.message);
//     return res.status(500).send("Server Error");
//   }
// });

export default router;
