import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerBadge: string;
  category: string;
  categoryIcon: string;
  icon: string;
  accentColor: string;
  description: string;
  skills: string[];
  issueDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  pdfUrl?: string;
  imageSrc?: string;
  verified: boolean;
  imageFailed?: boolean;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
  selectedCert: Certification | null = null;

  certifications: Certification[] = [
    {
      id: 'ai-specialist',
      title: 'Certified AI Specialist',
      issuer: 'Trailhead by Salesforce',
      issuerBadge: 'Salesforce Certified',
      category: 'Artificial Intelligence & Agents',
      categoryIcon: 'bi-stars',
      icon: 'bi-robot',
      accentColor: '#00a1e0',
      description: 'Comprehensive specialization in artificial intelligence principles, generative AI architectures, prompt design, and autonomous AI agents.',
      skills: ['Generative AI', 'Prompt Engineering', 'AI Agents & Automation', 'Ethical AI', 'LLM Integration'],
      issueDate: 'February 20, 2025',
      credentialId: '5793794',
      credentialUrl: 'https://trailhead.salesforce.com/en/credentials/verification/',
      pdfUrl: 'assets/certifications/AI_Specialist.pdf',
      imageSrc: 'assets/certifications/ai-specialist.png',
      verified: true
    },
    {
      id: 'database-udemy',
      title: 'Certified SQL, MySQL, PostgreSQL & MongoDB: All-in-One Database Course',
      issuer: 'Udemy',
      issuerBadge: 'Udemy Certified',
      category: 'Relational & NoSQL Databases',
      categoryIcon: 'bi-database-check',
      icon: 'bi-database-fill-gear',
      accentColor: '#a435f0',
      description: 'In-depth mastery across enterprise relational (SQL Server, MySQL, PostgreSQL) and document-based NoSQL (MongoDB) databases, query optimization, indexing, and data modeling.',
      skills: ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Query Optimization', 'Schema Design', 'Indexing & Joins'],
      issueDate: 'Completed',
      pdfUrl: 'assets/certifications/Udemy.pdf',
      imageSrc: 'assets/certifications/database-udemy.png',
      verified: true
    }
  ];

  openCertificate(cert: Certification): void {
    this.selectedCert = cert;
    document.body.style.overflow = 'hidden';
  }

  closeCertificate(): void {
    this.selectedCert = null;
    document.body.style.overflow = '';
  }

  handleImageError(cert: Certification): void {
    cert.imageFailed = true;
  }
}
