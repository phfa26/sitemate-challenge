import express from 'express';
import * as issuesController from '../controllers/issuesController';

const router = express.Router();

//create issue
router.post('/', issuesController.createIssue);

//read all issues
router.get('/', issuesController.getAllIssues);

// read issue
router.get('/:id', issuesController.getIssueById);

//update issue by ID
router.put('/:id', issuesController.updateIssue);

// delete issue by ID
router.delete('/:id', issuesController.deleteIssue);

export default router;
