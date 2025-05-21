import { useState } from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const domainSections = [

    {
  id: "architecture",
  title: "Architecture Design",
  content: (
    <>
      <p>
        The ForenLock system architecture integrates blockchain, machine learning, cryptography, and authentication modules to ensure secure forensic evidence management.
      </p>
      <img 
        src="/assets/architecture.png" 
        alt="System Architecture Diagram" 
        style={{ maxWidth: "100%", marginTop: "1rem", borderRadius: "8px" }}
      />
    </>
  )
},
  {
    id: "literature",
    title: "Literature Survey",
    content: `The literature highlights the critical challenges in healthcare forensic evidence management, including maintaining confidentiality, integrity, and limited access of Legal Health Records (LHR). It emphasizes blockchain’s potential to secure data immutably, and machine learning’s role in extracting handwritten and printed medical text. Prior systems often fail in privacy preservation and interoperability, while blockchain combined with cryptography offers promising solutions for tamper-proof, transparent evidence handling and secure sharing.`  
  },
  {
    id: "gap",
    title: "Research Gap",
    content: `Existing forensic systems face issues like unauthorized access, lack of dynamic access control, and privacy concerns. There is limited exploration of integrating blockchain with Fully Homomorphic Encryption (FHE) and Zero-Knowledge Proofs (ZKP) to provide secure, privacy-preserving, and real-time access management. Furthermore, prior OCR methods lack sufficient accuracy in recognizing complex handwritten medical notes, and domain-specific PII detection for privacy compliance remains underdeveloped.`  
  },
  {
    id: "problem",
    title: "Research Problem",
    content: `How can a forensic evidence management system in healthcare ensure the integrity, confidentiality, and privacy of sensitive Legal Health Records throughout their lifecycle, while enabling secure, dynamic access control and automated extraction of textual data from medical documents?`
  },
  {
    id: "objectives",
    title: "Research Objectives",
    content: `1. Design a blockchain-based custody evidence system to guarantee immutable chain of custody.\n
2. Implement advanced cryptographic methods such as Fully Homomorphic Encryption for dynamic access control.\n
3. Develop a web-based Zero-Knowledge Proof authentication for secure, privacy-preserving identity verification.\n
4. Create a machine learning-based OCR system using Donut, CFG Fusion, and ResNet Transfer Learning for accurate text extraction.\n
5. Build a domain-specific PII detection and masking engine to protect sensitive data while supporting forensic utility.`
  },
  {
    id: "methodology",
    title: "Methodology",
    content: `This study employs a mixed-methods design science approach:\n
- Development of an OCR system combining Donut, CFG Fusion, and ResNet Transfer Learning for handwritten and printed text extraction.\n
- Implementation of dynamic access management using Fully Homomorphic Encryption (FHE) and Chinese Remainder Theorem (CRT).\n
- Web-based authentication system utilizing Zero-Knowledge Proofs (ZKP) for secure, privacy-preserving verification.\n
- Machine learning-based PII detection engine fine-tuned with domain-specific data to automatically mask sensitive information.\n
- Performance validation through experiments measuring accuracy, security, and operational efficiency in forensic scenarios.`
  },
  {
    id: "technologies",
    title: "Technologies Used",
    content: `• Blockchain: Ethereum-based ledger ensures tamper-proof, immutable evidence custody.\n
• Cryptography: Fully Homomorphic Encryption (FHE) for encrypted dynamic access control; AES for secure storage.\n
• Authentication: Zero-Knowledge Proofs (ZKP) implemented via Circom and zk-SNARKs for privacy-preserving identity verification.\n
• Machine Learning: Donut OCR Transformer, CFG Fusion, and ResNet Transfer Learning for advanced text extraction from medical records.\n
• PII Masking: Domain-specific Named Entity Recognition (NER) models fine-tuned with LoRA to detect and mask 113 PII types.\n
• Tools: Node.js, Microsoft SEAL library for homomorphic encryption, HuggingFace Transformers for ML model training.`
  }


];

const Domain = () => {
  return (
    <section id="domain" className="bg-white py-20">
      <div className="container-section">
        <h2 className="section-title">Research Domain</h2>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="architecture" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              {domainSections.map((section) => (
                <TabsTrigger key={section.id} value={section.id} className="text-sm">
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {domainSections.map((section) => (
              <TabsContent key={section.id} value={section.id} className="p-6 bg-navy-50 rounded-lg">
                <h3 className="text-xl font-semibold text-navy-800 mb-4">{section.title}</h3>
                <div className="text-navy-700 whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Domain;
