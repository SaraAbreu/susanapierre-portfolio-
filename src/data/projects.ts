export interface Project {
  description: string;
  id: string;
  title: string;
  status: 'active' | 'deploying' | 'dev_mode';
  stack: string[];
  metrics: Record<string, string>;
  differentiator: string;
}

export const projects: Project[] = [
  {
    id: "SYS_BOT_01",
    title: "Chatbot Ciudadano",
    description: "Asistente virtual para atención ciudadana, disponible 24/7, que integra procesamiento de lenguaje natural y múltiples canales de comunicación.",
    status: "active",
    stack: ["Python", "Rasa", "FastAPI", "Docker", "Azure", "Telegram API"],
    metrics: {
      "Resolución Auto": "87%",
      "Latencia": "< 1.2s",
      "Uptime": "99.95%",
      "Protocolo": "REST"
    },
    differentiator: "Integración robusta con sistemas municipales y atención ciudadana 24/7 con procesamiento de lenguaje natural avanzado."
  },
  {
    id: "SYS_FIN_02",
    title: "Sistema de Facturación",
    description: "Plataforma para gestión y emisión de facturas electrónicas, diseñada para empresas que requieren trazabilidad y cumplimiento normativo.",
    status: "dev_mode",
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker", "Azure"],
    metrics: {
      "Proc. Time": "< 2s",
      "SLA Objetivo": "99.9%",
      "Architecture": "Modular",
      "DB": "PostgreSQL"
    },
    differentiator: "Enfoque en trazabilidad absoluta, cumplimiento normativo y escalabilidad horizontal para entornos empresariales."
  },
  {
    id: "SYS_MAIL_03",
    title: "Correo Automatizado",
    description: "Sistema automatizado para el envío masivo y personalizado de correos electrónicos, con monitoreo y gestión de colas en tiempo real.",
    status: "dev_mode",
    stack: ["Python", "Celery", "FastAPI", "SMTP", "Docker"],
    metrics: {
      "Delivery Rate": "> 98%",
      "Send Latency": "< 1s/msg",
      "Engine": "Celery",
      "Queue": "Redis"
    },
    differentiator: "Orquestación de tareas masivas con monitoreo en tiempo real y personalización dinámica de plantillas."
  }
];
