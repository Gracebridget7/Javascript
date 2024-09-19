const ONE_WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000;

function analyzeUsers(users) {
  const activeUsers = users.filter(user => {
    const recentPosts = user.posts.filter(post => {
      const postTimestamp = new Date(post.timestamp).getTime();
      const now = new Date().getTime();
      return postTimestamp > now - ONE_WEEK_IN_MS;
    });
    return recentPosts.length > 0;
  });

  const popularPosts = activeUsers.flatMap(user => user.posts.filter(post => post.likes >= 10));

  const averageLikesPerUser = popularPosts.reduce((acc, post) => acc + post.likes, 0) / popularPosts.length;

  return {
    activeUsersCount: activeUsers.length,
    popularPostsCount: popularPosts.length,
    averageLikesPerUser: averageLikesPerUser
  };
}

const result = analyzeUsers(users);
console.log(result);