import fs from 'fs';
import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node';

const repoDir = process.cwd();
const token = process.argv[2] || process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

async function push() {
  if (!token) {
    console.error('\n❌ No GitHub Personal Access Token provided.');
    console.error('Usage: node push.mjs <YOUR_GITHUB_TOKEN>\n');
    process.exit(1);
  }

  console.log('🚀 Pushing main branch to https://github.com/reddysantosh1112/Aetheraaeroworks.git...');
  try {
    const res = await git.push({
      fs,
      http,
      dir: repoDir,
      remote: 'origin',
      ref: 'main',
      onAuth: () => ({ username: token }),
    });
    console.log('✅ Push completed successfully!\n');
  } catch (err) {
    console.error('❌ Push failed:', err.message);
    if (err.data) console.error(err.data);
  }
}

push();
