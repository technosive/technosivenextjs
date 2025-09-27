import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    icon: (
      <svg width="40" height="42" viewBox="0 0 40 42" className="fill-current">
        <path
          opacity="0.5"
          d="M20 5C20 5 10 10 10 20V30C10 40 20 50 20 50C20 50 30 40 30 30V20C30 10 20 5 20 5Z"
        />
        <path d="M20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0ZM20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20C35 28.2843 28.2843 35 20 35ZM20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10Z" />
      </svg>
    ),
    title: "End Point Security",
    path: "/services/end-point-security",
    paragraph:
      "Comprehensive endpoint protection solutions to secure all devices connected to your network, including laptops, mobile devices, and servers against advanced threats.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 5L5 15V25C5 32.5 20 35 20 35C20 35 35 32.5 35 25V15L20 5Z"
        />
        <path d="M20 0L0 12V28C0 37.5 20 40 20 40C20 40 40 40 20 40C20 40 0 37.5 0 28V12L20 0ZM20 5L5 15V25C5 32.5 20 35 20 35C20 35 35 32.5 35 25V15L20 5Z" />
      </svg>
    ),
    title: "Web Application Security",
    path: "/services/web-application-security",
    paragraph:
      "Advanced web application security services including penetration testing, vulnerability assessments, and secure coding practices to protect your online applications.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 10C15 10 10 15 10 20C10 25 15 30 20 30C25 30 30 25 30 20C30 15 25 10 20 10Z"
        />
        <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5ZM20 30C14.4772 30 10 25.5228 10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30ZM20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15Z" />
      </svg>
    ),
    title: "Security Operations Center",
    path: "/services/security-operations-center",
    paragraph:
      "24/7 security monitoring and threat detection services with expert analysts continuously monitoring your infrastructure for potential security incidents.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 5L10 10V20C10 28 20 30 20 30C20 30 30 28 30 20V10L20 5Z"
        />
        <path d="M20 0L5 8V22C5 32 20 35 20 35C20 35 35 35 20 35C20 35 5 32 5 22V8L20 0ZM20 5L10 10V20C10 28 20 30 20 30C20 30 30 28 30 20V10L20 5Z" />
      </svg>
    ),
    title: "Database Security",
    path: "/services/database-security",
    paragraph:
      "Comprehensive database protection solutions including encryption, access control, and activity monitoring to secure your critical data assets.",
  },
  {
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
        <path
          opacity="0.5"
          d="M20 10C15 10 10 15 10 20C10 25 15 30 20 30C25 30 30 25 30 20C30 15 25 10 20 10Z"
        />
        <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5ZM20 30C14.4772 30 10 25.5228 10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30ZM18 15H22V25H18V15ZM18 12H22V14H18V12Z" />
      </svg>
    ),
    title: "Network Security",
    path: "/services/network-security",
    paragraph:
      "Advanced network protection solutions including firewalls, intrusion prevention systems, and secure network architecture to safeguard your infrastructure.",
  },
  {
    icon: (
      <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
        <path
          opacity="0.5"
          d="M20 10C15 10 10 15 10 20C10 25 15 30 20 30C25 30 30 25 30 20C30 15 25 10 20 10Z"
        />
        <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5ZM20 30C14.4772 30 10 25.5228 10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30ZM20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15ZM18 18H22V22H18V18Z" />
      </svg>
    ),
    title: "Risk & Compliance",
    path: "/services/risk-compliance",
    paragraph:
      "Comprehensive risk assessment and compliance management services to ensure adherence to regulatory requirements and industry standards.",
  },
  {
    icon: (
      <svg width="40" height="42" viewBox="0 0 40 42" className="fill-current">
        <path
          opacity="0.5"
          d="M20 5C20 5 10 10 10 20V30C10 40 20 50 20 50C20 50 30 40 30 30V20C30 10 20 5 20 5Z"
        />
        <path d="M20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0ZM20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20C35 28.2843 28.2843 35 20 35ZM20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10Z" />
      </svg>
    ),
    title: "Email Security",
    path: "/services/email-security",
    paragraph:
      "Advanced email protection solutions to defend against phishing, malware, spam, and sophisticated email-based attacks targeting your organization.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 5L5 15V25C5 32.5 20 35 20 35C20 35 35 32.5 35 25V15L20 5Z"
        />
        <path d="M20 0L0 12V28C0 37.5 20 40 20 40C20 40 40 40 20 40C20 40 0 37.5 0 28V12L20 0ZM20 5L5 15V25C5 32.5 20 35 20 35C20 35 35 32.5 35 25V15L20 5Z" />
      </svg>
    ),
    title: "Identity & Access Management",
    path: "/services/identity-access-management",
    paragraph:
      "Comprehensive identity and access management solutions to ensure secure authentication, authorization, and access control across your organization.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 10C15 10 10 15 10 20C10 25 15 30 20 30C25 30 30 25 30 20C30 15 25 10 20 10Z"
        />
        <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5ZM20 30C14.4772 30 10 25.5228 10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30ZM20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15Z" />
      </svg>
    ),
    title: "Exposure Management",
    path: "/services/exposure-management",
    paragraph:
      "Continuous exposure assessment and management services to identify, prioritize, and remediate security vulnerabilities across your attack surface.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 5L10 10V20C10 28 20 30 20 30C20 30 30 28 30 20V10L20 5Z"
        />
        <path d="M20 0L5 8V22C5 32 20 35 20 35C20 35 35 35 20 35C20 35 5 32 5 22V8L20 0ZM20 5L10 10V20C10 28 20 30 20 30C20 30 30 28 30 20V10L20 5Z" />
      </svg>
    ),
    title: "Data Leakage Prevention",
    path: "/services/data-leakage-prevention",
    paragraph:
      "Advanced data loss prevention solutions to monitor, detect, and block unauthorized data exfiltration across your organization's endpoints and network.",
  },
  {
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
        <path
          opacity="0.5"
          d="M20 10C15 10 10 15 10 20C10 25 15 30 20 30C25 30 30 25 30 20C30 15 25 10 20 10Z"
        />
        <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5ZM20 30C14.4772 30 10 25.5228 10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30ZM18 15H22V25H18V15ZM18 12H22V14H18V12Z" />
      </svg>
    ),
    title: "Enterprise Data Erasure",
    path: "/services/enterprise-data-erasure",
    paragraph:
      "Secure and certified data erasure services to permanently destroy sensitive data from storage devices, ensuring compliance with data protection regulations.",
  },
  {
    icon: (
      <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
        <path
          opacity="0.5"
          d="M20 10C15 10 10 15 10 20C10 25 15 30 20 30C25 30 30 25 30 20C30 15 25 10 20 10Z"
        />
        <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5ZM20 30C14.4772 30 10 25.5228 10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30ZM20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15ZM18 18H22V22H18V18Z" />
      </svg>
    ),
    title: "Security Management",
    path: "/services/security-management",
    paragraph:
      "Comprehensive security management services including policy development, security governance, and strategic security planning for your organization.",
  },
].map((item, index) => ({ id: index + 1, ...item }));
export default featuresData;