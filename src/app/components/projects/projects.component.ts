import { Component } from '@angular/core';

interface Project {
  title: string;
  role: string;
  type: string;
  description: string;
  details: string[];
  stack: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'CM Resident Hub',
      role: 'Team Leader',
      type: 'Housing Society Management System',
      description: 'Full-stack society management application with role-based workflows for residents, Chairman, Secretary and Accountant.',
      details: [
        'Developed the Chairman Module and maintenance bill approval/tracking workflows.',
        'Implemented approval and rejection of Occasional Maintenance requests and Indirect Expense requests.',
        'Built Angular UI flows integrated with ASP.NET Core Web API and SQL Server.',
        'Applied dependency injection, repository pattern and separate interfaces/implementations.',
        'Implemented validation, status checks, exception handling and role-based access controls.'
      ],
      stack: ['C#','ASP.NET Core','Angular','Web API','EF Core','LINQ','SQL Server'],
      featured: true
    },
    {
      title: 'AgroHub',
      role: 'Team Member',
      type: 'Tourism Management System',
      description: 'Tourism and farm management application supporting visitor and farm-owner workflows.',
      details: [
        'Worked on Visitor and FarmOwner modules.',
        'Implemented booking management, farm listing, search and profile functionality.',
        'Developed CRUD operations using ASP.NET MVC and ADO.NET.',
        'Worked with stored procedures, validation, exception handling and query optimization.'
      ],
      stack: ['C#','ASP.NET MVC','ADO.NET','SQL Server','HTML5','CSS3','Bootstrap','jQuery','AJAX']
    },
    {
      title: 'Clear Ticket',
      role: 'Team Member',
      type: 'Ticketing & Support Tool',
      description: 'Role-based ticketing system supporting ticket creation, assignment, escalation, SLA tracking and performance monitoring.',
      details: [
        'Worked across Admin, Team Leader, Agent and Customer workflows.',
        'Implemented ticket creation, assignment, escalation, priority and resolution flows.',
        'Supported SLA, overdue and performance dashboard functionality.',
        'Used parameterized queries and database-driven operations.'
      ],
      stack: ['C#','ASP.NET MVC','ADO.NET','JavaScript','AJAX','Bootstrap 5','SQL Server']
    },
    {
      title: 'CM AccountEase',
      role: 'Team Member',
      type: 'Accounting & Business Management',
      description: 'Windows Forms accounting and business management application for operational and transaction management.',
      details: [
        'Worked on Party, Inventory, Sales, Purchase, Expenses, Cash & Bank and Loan Accounts modules.',
        'Supported invoices, quotations, receipts, orders, returns and GST-related functionality.',
        'Implemented CRUD operations and database interactions using ADO.NET and SQL Server.',
        'Worked on maintenance, debugging and business-rule validation.'
      ],
      stack: ['C#','WinForms','ADO.NET','SQL Server']
    }
  ];

  selectedProject: Project | null = null;

  openProject(project: Project): void {
    this.selectedProject = project;
  }

  closeProject(): void {
    this.selectedProject = null;
  }
}