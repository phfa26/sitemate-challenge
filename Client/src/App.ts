import axios from 'axios';
import { Command } from 'commander';

const serverURL = process.env.SERVER_URL || 'http://localhost:3000';

const program = new Command();
program.version('1.0.0');

//create issue 
program
  .command('create <title> <description>')
  .description('Create a new issue')
  .action(async (title, description) => {
    try {
      const response = await axios.post(`${serverURL}/api/issues`, { title, description });
      console.log('Created Issue:', response.data);
    } catch (error: any) {
      console.error('Error creating issue:', error.message);
    }
  });

 //read all issues
program
  .command('read-all')
  .description('Read all issues')
  .action(async () => {
    try {
      const response = await axios.get(`${serverURL}/api/issues`);
      console.log('All Issues:', response.data);
    } catch (error: any) {
      console.error('Error reading issues:', error.message);
    }
  });

//get issue by ID
program
  .command('read <id>')
  .description('Read issue by ID')
  .action(async (id) => {
    try {
      const response = await axios.get(`${serverURL}/api/issues/${id}`);
      console.log('Issue ID:', id);
      console.log('Read Issue:', response.data);
    } catch (error: any) {
      console.error('Error reading issue:', error.message);
    }
  });

//updates issue by id
program
  .command('update <id> <title> <description>')
  .description('Update an issue by ID')
  .action(async (id, title, description) => {
    try {
      const response = await axios.put(`${serverURL}/api/issues/${id}`, { title, description });
      console.log('Updated Issue:', response.data);
    } catch (error: any) {
      console.error('Error updating issue:', error.message);
    }
  });

//deletes issue by id
program
  .command('delete <id>')
  .description('Delete an issue by ID')
  .action(async (id) => {
    try {
      const response = await axios.delete(`${serverURL}/api/issues/${id}`);
      console.log('Deleted Issue:', response.data);
    } catch (error: any) {
      console.error('Error deleting issue:', error.message);
    }
  });

program.parse(process.argv);
