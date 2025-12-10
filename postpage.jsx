import { Link, useParams } from "react-router-dom";

const PostPage = () => {
  const { postId } = useParams();

  const posts = {
    1: {
      id: 1,
      title: "Post 1",
      content: "This is the content of  first post.",
      
    },
    2: {
      id: 2,
      title: "Post 2",
      content: "This is the content of  second post topic.",
      
    },
    3: {
      id: 3,
      title: "Post 3",
      content: "This is the content   third post here.",
     
    }
  };

  const post = posts[postId];

  return (
    <div style={{ padding: "20px" }}>
      {!postId ? (
        <>
          <h2>All Posts</h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {Object.values(posts).map((p) => (
              <div
                key={p.id}
                style={{
                  border: "1px solid #ddd",
                  padding: "15px",
                  borderRadius: "8px",
                  width: "300px",
                  backgroundColor: "#f9f9f9"
                }}
              >
                <h3>{p.title}</h3>
                <p>{p.content.substring(0, 100)}...</p>
                <p style={{ fontSize: "12px", color: "#666" }}>
                  By {p.author} on {p.date}
                </p>
                <Link
                  to={`/posts/${p.id}`}
                  style={{
                    color: "#007bff",
                    textDecoration: "none",
                    fontWeight: "bold"
                  }}
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </>
      ) : post ? (
        <>
          <Link
            to="/posts"
            style={{
              color: "#007bff",
              textDecoration: "none",
              marginBottom: "20px",
              display: "inline-block"
            }}
          >
            ← Back to All Posts
          </Link>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "30px",
              borderRadius: "8px",
              backgroundColor: "#fff",
              marginTop: "20px"
            }}
          >
            <h1>{post.title}</h1>
            <p style={{ fontSize: "14px", color: "#666" }}>
              By {post.author} on {post.date}
            </p>
            <hr />
            <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
              {post.content}
            </p>
          </div>
        </>
      ) : (
        <div style={{ padding: "20px" }}>
          <h2>Post not found</h2>
          <Link to="/posts">Back to All Posts</Link>
        </div>
      )}
    </div>
  );
};

export default PostPage;
