import type { StackIcon } from './projects';

export type StackGroup = { label: string; icons: StackIcon[]; tone?: 'source' };

export type AiProject = {
  slug: string;
  title: string;
  kicker: string;
  tagline: string;
  /** One-line design principle, shown as a pull quote */
  principle?: string;
  built: string[];
  /** How the project's data layer is engineered — ties AI work back to data work */
  dataAngle: string;
  tags: string[];
  /** Logo strip, same treatment as the featured data-work cards */
  stack: StackGroup[];
  repo: string;
};

export const aiProjects: AiProject[] = [
  {
    slug: 'canary-pact',
    title: 'Canary Pact',
    kicker: 'Decision simulation · multi-agent',
    tagline:
      'Simulates the consequences of a company decision, such as consolidating data vendors or cutting roles that support critical workflows, before a person approves it.',
    principle: 'Agents reason. Deterministic code calculates. Humans decide.',
    built: [
      'A versioned “company twin”: a graph of departments, workflows, systems, vendors, controls and KPIs with typed dependencies and linked evidence.',
      'Deterministic simulations comparing acting now, waiting and doing nothing, reporting savings, downstream costs, constraint violations and blast radius.',
      'LLM department agents plus a challenger agent; every claim is checked against the twin and its evidence, and validated claims can rerun the simulation.',
      'A decision package that a signed-in approver can approve, reject or send back; viewers cannot approve.'
    ],
    dataAngle:
      'PostgreSQL stores versioned twins as JSONB alongside relational orgs and memberships, plus runs, sequence-ordered events and approval decisions. Shared Pydantic contracts generate JSON Schemas and TypeScript types.',
    tags: ['Python', 'FastAPI', 'Pydantic', 'PostgreSQL', 'Next.js', 'TypeScript', 'LLM agents'],
    stack: [
      { label: 'Stack', icons: [
          { name: 'Python', src: '/images/logos/stack/python.svg' },
          { name: 'FastAPI', src: '/images/logos/stack/fastapi.svg' },
          { name: 'Pydantic', src: '/images/logos/stack/pydantic.svg' },
          { name: 'Next.js', src: '/images/logos/stack/nextdotjs.svg' },
          { name: 'TypeScript', src: '/images/logos/stack/typescript.svg' }
        ] },
      { label: 'Data stores', tone: 'source', icons: [
          { name: 'PostgreSQL', src: '/images/logos/stack/postgresql.svg' },
          { name: 'SQLite', src: '/images/logos/stack/sqlite.svg' }
        ] }
    ],
    repo: 'https://github.com/all3n2601/glasswing-canary-pact'
  },
  {
    slug: 'agentwatch',
    title: 'AgentWatch',
    kicker: 'Agent observability · MLOps',
    tagline:
      'Explains why an AI agent is slow by separating measured worker queue delay from execution time, and tying each result to traces and resource evidence.',
    built: [
      'Reproducible clean-versus-contended CPU experiments recording OpenTelemetry spans and worker enqueue/start/finish timestamps.',
      'A resource sampler for Linux CPU pressure and cgroup throttling at 250 ms intervals, aligned to agent-step windows.',
      'A locally hosted Qwen3 model (Ollama) with a real tool-call loop restricted to an allowlisted, argument-validated function.',
      'A seven-page Next.js dashboard: run history, trace waterfalls, agent conversations, resource evidence and baseline comparisons.',
      'An Airflow dataset DAG (acquire → build → validate → split → version → push → alert) with a TFDV schema gate and Slack alerts.'
    ],
    dataAngle:
      'Datasets are versioned with DVC on a Google Cloud Storage bucket; a fresh clone with no Google login pulls a release and reruns the pipeline. FastAPI ingests runs into PostgreSQL with validated contracts and duplicate-safe imports.',
    tags: ['Python', 'OpenTelemetry', 'FastAPI', 'PostgreSQL', 'Airflow', 'DVC', 'GCS', 'Next.js', 'Docker', 'Ollama'],
    stack: [
      { label: 'Stack', icons: [
          { name: 'Python', src: '/images/logos/stack/python.svg' },
          { name: 'OpenTelemetry', src: '/images/logos/stack/opentelemetry.svg' },
          { name: 'FastAPI', src: '/images/logos/stack/fastapi.svg' },
          { name: 'Next.js', src: '/images/logos/stack/nextdotjs.svg' },
          { name: 'Docker', src: '/images/logos/stack/docker.svg' }
        ] },
      { label: 'Data & models', tone: 'source', icons: [
          { name: 'PostgreSQL', src: '/images/logos/stack/postgresql.svg' },
          { name: 'Airflow', src: '/images/logos/stack/apacheairflow.svg' },
          { name: 'DVC', src: '/images/logos/stack/dvc.svg' },
          { name: 'Cloud Storage', src: '/images/logos/stack/googlecloudstorage.svg' },
          { name: 'TFDV', src: '/images/logos/stack/tensorflow.svg' },
          { name: 'Ollama · Qwen3', src: '/images/logos/stack/ollama.svg' }
        ] }
    ],
    repo: 'https://github.com/all3n2601/AgentWatch'
  }
];
