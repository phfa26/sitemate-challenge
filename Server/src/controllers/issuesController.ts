import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const issuesFilePath = path.join(__dirname, '../../data/issues.json');

// define issue interface
interface Issue {
  id: number;
  title: string;
  description: string;
}

//read issues from the file
const readIssuesFromFile = (): Issue[] => {
  const issuesData = fs.readFileSync(issuesFilePath, 'utf-8');
  return JSON.parse(issuesData);
};

// write issues to the file
const writeIssuesToFile = (issues: Issue[]) => {
  const issuesData = JSON.stringify(issues, null, 2);
  fs.writeFileSync(issuesFilePath, issuesData);
};

// creates issue
export const createIssue = (req: Request, res: Response) => {
  const newIssue: Issue = req.body as Issue;
  const issues: Issue[] = readIssuesFromFile();

  newIssue.id = issues.length + 1;

  issues.push(newIssue);

  writeIssuesToFile(issues);

  res.json(newIssue);
};

// read issues
export const getAllIssues = (req: Request, res: Response) => {
    const issues: Issue[] = readIssuesFromFile();

    res.json(issues);
};

// get issue by ID
export const getIssueById = (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const issues: Issue[] = readIssuesFromFile();

  const issue = issues.find((issue) => issue.id === id);

  if (issue) {
    res.json(issue);
  } else {
    res.status(404).json({ error: 'Issue not found' });
  }
};

// update issue by ID
export const updateIssue = (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const updatedIssue: Issue = req.body as Issue;

  const issues: Issue[] = readIssuesFromFile();

  for (let i = 0; i < issues.length; i++) {
    if (issues[i].id === id) {
      issues[i] = { ...issues[i], ...updatedIssue };

      writeIssuesToFile(issues);

      return res.json(issues[i]);
    }
  }
  res.status(404).json({ error: 'Issue not found' });
};

// Delete an issue by ID
export const deleteIssue = (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const issues: Issue[] = readIssuesFromFile();

  for (let i = 0; i < issues.length; i++) {
    if (issues[i].id === id) {
      console.log('Deleted Issue:', issues[i]);
      issues.splice(i, 1);

      // Write the updated issues list back to the file
      writeIssuesToFile(issues);

      return res.json({ message: 'Issue deleted successfully' });
    }
  }
  res.status(404).json({ error: 'Issue not found' });
};
