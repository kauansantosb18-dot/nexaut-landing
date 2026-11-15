type MockKind = "dashboard" | "crm" | "ops" | "flow";

function Chrome({ title }: { title: string }) {
  return (
    <div className="mock-chrome">
      <span className="mock-dot" />
      <span className="mock-dot" />
      <span className="mock-dot" />
      <span className="mock-title">{title}</span>
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="mock-screen mock-dashboard" aria-hidden="true">
      <Chrome title="NEXAUT · Analytics" />
      <div className="mock-body">
        <aside className="mock-rail">
          <div className="mock-rail-item is-on" />
          <div className="mock-rail-item" />
          <div className="mock-rail-item" />
          <div className="mock-rail-item" />
        </aside>
        <div className="mock-main">
          <div className="mock-kpis">
            <div className="mock-kpi">
              <span className="mock-kpi-label">Receita</span>
              <span className="mock-kpi-value accent">R$ 184k</span>
              <span className="mock-kpi-trend up">+18%</span>
            </div>
            <div className="mock-kpi">
              <span className="mock-kpi-label">Pedidos</span>
              <span className="mock-kpi-value">2.431</span>
              <span className="mock-kpi-trend up">+9%</span>
            </div>
            <div className="mock-kpi">
              <span className="mock-kpi-label">Conversão</span>
              <span className="mock-kpi-value gold">4,8%</span>
              <span className="mock-kpi-trend">estável</span>
            </div>
          </div>
          <div className="mock-split">
            <div className="mock-chart-area">
              <svg className="mock-spark" viewBox="0 0 240 90" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#36d9f5" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#36d9f5" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 70 L30 58 L55 62 L85 40 L115 48 L145 28 L175 34 L205 18 L240 24 V90 H0 Z"
                  fill="url(#sparkFill)"
                />
                <path
                  d="M0 70 L30 58 L55 62 L85 40 L115 48 L145 28 L175 34 L205 18 L240 24"
                  fill="none"
                  stroke="#36d9f5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="mock-bars">
              <span style={{ height: "55%" }} />
              <span style={{ height: "78%" }} />
              <span style={{ height: "42%" }} />
              <span style={{ height: "90%" }} />
              <span style={{ height: "64%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CrmMock() {
  return (
    <div className="mock-screen mock-crm" aria-hidden="true">
      <Chrome title="NEXAUT · CRM" />
      <div className="mock-body mock-crm-body">
        <div className="mock-pipeline">
          {[
            { name: "Lead", count: 12, tone: "muted" },
            { name: "Proposta", count: 7, tone: "primary" },
            { name: "Fechado", count: 4, tone: "gold" },
          ].map((col) => (
            <div key={col.name} className={`mock-pipe-col tone-${col.tone}`}>
              <div className="mock-pipe-head">
                <span>{col.name}</span>
                <strong>{col.count}</strong>
              </div>
              <div className="mock-deal" />
              <div className="mock-deal short" />
              <div className="mock-deal" />
            </div>
          ))}
        </div>
        <div className="mock-contact-card">
          <div className="mock-avatar" />
          <div className="mock-contact-lines">
            <span className="wide" />
            <span />
            <span className="mid" />
          </div>
          <div className="mock-tags">
            <span className="tag primary">Hot</span>
            <span className="tag gold">B2B</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function OpsMock() {
  return (
    <div className="mock-screen mock-ops" aria-hidden="true">
      <Chrome title="NEXAUT · Operação" />
      <div className="mock-body mock-ops-body">
        <div className="mock-toolbar">
          <span className="mock-search" />
          <span className="mock-filter" />
          <span className="mock-filter narrow" />
        </div>
        <div className="mock-table">
          <div className="mock-tr head">
            <span>Pedido</span>
            <span>Status</span>
            <span>SLA</span>
            <span>Valor</span>
          </div>
          {[
            { status: "ok", label: "Entregue" },
            { status: "warn", label: "Em rota" },
            { status: "ok", label: "Separando" },
            { status: "danger", label: "Atraso" },
            { status: "ok", label: "Pago" },
          ].map((row, i) => (
            <div key={row.label + i} className="mock-tr">
              <span className="mono">#{1042 + i}</span>
              <span className={`pill ${row.status}`}>{row.label}</span>
              <span className="bar-wrap">
                <i style={{ width: `${55 + i * 8}%` }} />
              </span>
              <span className="mono">R$ {(890 + i * 120).toLocaleString("pt-BR")}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FlowMock() {
  return (
    <div className="mock-screen mock-flow" aria-hidden="true">
      <Chrome title="NEXAUT · Automação" />
      <div className="mock-body mock-flow-body">
        <div className="mock-nodes">
          <div className="mock-node start">
            <span>Trigger</span>
            <small>Novo pedido</small>
          </div>
          <div className="mock-edge" />
          <div className="mock-node">
            <span>Regra</span>
            <small>Valor &gt; 500</small>
          </div>
          <div className="mock-edge" />
          <div className="mock-node accent">
            <span>Ação</span>
            <small>Notificar time</small>
          </div>
          <div className="mock-edge" />
          <div className="mock-node gold">
            <span>Resultado</span>
            <small>Lead priorizado</small>
          </div>
        </div>
        <div className="mock-log">
          <div className="mock-log-line ok">✓ Pedido #1088 capturado</div>
          <div className="mock-log-line ok">✓ Regra aplicada em 42ms</div>
          <div className="mock-log-line run">→ WhatsApp enviado</div>
        </div>
      </div>
    </div>
  );
}

export function SystemMock({ kind }: { kind: MockKind }) {
  switch (kind) {
    case "dashboard":
      return <DashboardMock />;
    case "crm":
      return <CrmMock />;
    case "ops":
      return <OpsMock />;
    case "flow":
      return <FlowMock />;
  }
}

export type { MockKind };
