import { Octokit } from 'octokit';

const octokit = new Octokit({auth: process.env.GITHUB_TOKEN});

export default octokit;

export interface IPost {
  title: string;
  comments: number;
  body?: string;
  created_at: string;
  number: number;
}