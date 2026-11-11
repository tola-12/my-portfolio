export interface GitHubProfile {
  name: string;
  login: string;
  bio: string;
  public_repos: number;
  followers: number;
  avatar_url: string;
  html_url: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  forks_count: number;
  updated_at: string;
}

export async function fetchGitHubStats(username = process.env.GITHUB_USERNAME || "tola-12") {
  const token = process.env.GITHUB_ACCESS_TOKEN;
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 3600 }, // Cache for 1 hour
      }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
        headers,
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok) {
      throw new Error(`GitHub user fetch failed: ${userRes.statusText}`);
    }

    const user: GitHubProfile = await userRes.json();
    const repos: GitHubRepo[] = reposRes.ok ? await reposRes.json() : [];

    return {
      success: true,
      user,
      repos: Array.isArray(repos) ? repos : [],
    };
  } catch (err) {
    console.warn("GitHub API fetch fallback:", err);
    return {
      success: false,
      user: {
        name: "Hor Tola",
        login: username,
        bio: "Full-Stack Software Engineer & Mobile Developer",
        public_repos: 12,
        followers: 18,
        avatar_url: "/images/hortola_.jpg",
        html_url: `https://github.com/${username}`,
      },
      repos: [],
    };
  }
}

