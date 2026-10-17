import { Component } from '@angular/core';

interface SkillGroup {
  icon: string;
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  groups: SkillGroup[] = [
    { icon:'bi-code-slash', title:'Backend', skills:['C#','ASP.NET Core','ASP.NET MVC','Web API','Entity Framework Core','LINQ','ADO.NET'] },
    { icon:'bi-window-stack', title:'Frontend', skills:['Angular','JavaScript','HTML5','CSS3','Bootstrap 5','jQuery','AJAX'] },
    { icon:'bi-database', title:'Database', skills:['Microsoft SQL Server','MySQL','Stored Procedures','Views','Triggers','Indexing','Query Optimization'] },
    { icon:'bi-tools', title:'Tools', skills:['Git','GitHub','Visual Studio','VS Code','SSMS','Swagger','Postman'] },
    { icon:'bi-diagram-3', title:'Architecture', skills:['REST APIs','Layered Architecture','Repository Pattern','Dependency Injection','DTOs','OOP','SOLID'] },
    { icon:'bi-kanban', title:'Practices', skills:['Agile','Scrum','SDLC','Debugging','Root Cause Analysis','Performance Optimization'] }
  ];
}