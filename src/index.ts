// Forge — Admin Panel.
// Mounts a CRUD UI over your schema. Role gates checked per-field.

export type Role = 'admin' | 'editor' | 'viewer';

export interface ResourceSpec<T> {
  table: string;
  fields: Array<{
    key: keyof T & string;
    label: string;
    readableBy: Role[];
    writableBy: Role[];
    mask?: 'email' | 'partial';
  }>;
}

export interface AdminConfig {
  resources: ResourceSpec<unknown>[];
  impersonationAllowedFor: Role[];
  audit: { onWrite: (event: AuditEvent) => void };
}

export interface AuditEvent {
  actor: string;
  action: 'read' | 'create' | 'update' | 'delete' | 'impersonate';
  resource: string;
  rowId?: string;
  before?: unknown;
  after?: unknown;
  at: string;
}

export function visibleFields<T>(spec: ResourceSpec<T>, role: Role): typeof spec.fields {
  return spec.fields.filter((f) => f.readableBy.includes(role));
}

export function applyMask(value: unknown, mask?: 'email' | 'partial'): string {
  const s = String(value ?? '');
  if (mask === 'email') return s.replace(/^(.).+(@.+)$/, '$1•••$2');
  if (mask === 'partial') return s.replace(/.(?=.{2})/g, '•');
  return s;
}
