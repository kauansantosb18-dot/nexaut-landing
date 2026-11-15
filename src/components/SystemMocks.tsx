type MockKind =
  | "dashboard"
  | "reports"
  | "stock"
  | "logistics"
  | "products"
  | "clients"
  | "ops";

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
    <div className="mock-screen" aria-hidden="true">
      <Chrome title="NEXAUT · Dashboard" />
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

function ReportsMock() {
  return (
    <div className="mock-screen" aria-hidden="true">
      <Chrome title="NEXAUT · Relatórios" />
      <div className="mock-body mock-ops-body">
        <div className="mock-toolbar">
          <span className="mock-search" />
          <span className="mock-filter" />
          <span className="mock-filter narrow" />
        </div>
        <div className="mock-split mock-reports-split">
          <div className="mock-chart-area">
            <svg className="mock-spark" viewBox="0 0 240 90" preserveAspectRatio="none">
              <defs>
                <linearGradient id="reportFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#d6ad55" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#d6ad55" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 60 L40 52 L80 58 L120 36 L160 42 L200 22 L240 30 V90 H0 Z"
                fill="url(#reportFill)"
              />
              <path
                d="M0 60 L40 52 L80 58 L120 36 L160 42 L200 22 L240 30"
                fill="none"
                stroke="#d6ad55"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="mock-report-list">
            {[
              { name: "Vendas do mês", meta: "PDF · hoje" },
              { name: "Estoque crítico", meta: "XLSX · ontem" },
              { name: "Performance rota", meta: "PDF · semanal" },
              { name: "Clientes ativos", meta: "CSV · mensal" },
            ].map((r) => (
              <div key={r.name} className="mock-report-row">
                <strong>{r.name}</strong>
                <small>{r.meta}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StockMock() {
  return (
    <div className="mock-screen" aria-hidden="true">
      <Chrome title="NEXAUT · Pedidos & Estoque" />
      <div className="mock-body mock-ops-body">
        <div className="mock-kpis">
          <div className="mock-kpi">
            <span className="mock-kpi-label">Pedidos hoje</span>
            <span className="mock-kpi-value accent">128</span>
            <span className="mock-kpi-trend up">+14%</span>
          </div>
          <div className="mock-kpi">
            <span className="mock-kpi-label">Em estoque</span>
            <span className="mock-kpi-value">4.820</span>
            <span className="mock-kpi-trend">SKUs</span>
          </div>
          <div className="mock-kpi">
            <span className="mock-kpi-label">Baixo estoque</span>
            <span className="mock-kpi-value gold">17</span>
            <span className="mock-kpi-trend">alertas</span>
          </div>
        </div>
        <div className="mock-table">
          <div className="mock-tr head">
            <span>Pedido</span>
            <span>Produto</span>
            <span>Estoque</span>
            <span>Status</span>
          </div>
          {[
            { sku: "Item A-01", stock: 82, status: "ok", label: "Separado" },
            { sku: "Item B-14", stock: 9, status: "warn", label: "Baixo" },
            { sku: "Item C-07", stock: 140, status: "ok", label: "Faturado" },
            { sku: "Item D-22", stock: 3, status: "danger", label: "Crítico" },
            { sku: "Item E-03", stock: 44, status: "ok", label: "Enviado" },
          ].map((row, i) => (
            <div key={row.sku} className="mock-tr">
              <span className="mono">#{2201 + i}</span>
              <span>{row.sku}</span>
              <span className="bar-wrap">
                <i style={{ width: `${Math.min(row.stock, 100)}%` }} />
              </span>
              <span className={`pill ${row.status}`}>{row.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LogisticsMock() {
  return (
    <div className="mock-screen" aria-hidden="true">
      <Chrome title="NEXAUT · Logística" />
      <div className="mock-body mock-ops-body">
        <div className="mock-logistics-track">
          {["Coleta", "Hub", "Rota", "Entrega"].map((step, i) => (
            <div key={step} className={`mock-track-step${i < 3 ? " is-done" : ""}${i === 2 ? " is-now" : ""}`}>
              <span className="mock-track-dot" />
              <span>{step}</span>
            </div>
          ))}
        </div>
        <div className="mock-split mock-logistics-split">
          <div className="mock-map">
            <div className="mock-route" />
            <div className="mock-pin start" />
            <div className="mock-pin end" />
          </div>
          <div className="mock-list mock-shipments">
            <div className="mock-ship-row">
              <strong>#RT-882</strong>
              <span className="pill ok">Em rota</span>
            </div>
            <div className="mock-ship-row">
              <strong>#RT-879</strong>
              <span className="pill warn">Aguardando</span>
            </div>
            <div className="mock-ship-row">
              <strong>#RT-871</strong>
              <span className="pill ok">Entregue</span>
            </div>
            <div className="mock-ship-meta">ETA 14:40 · 3 paradas</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductsMock() {
  return (
    <div className="mock-screen" aria-hidden="true">
      <Chrome title="NEXAUT · Produtos" />
      <div className="mock-body mock-ops-body">
        <div className="mock-toolbar">
          <span className="mock-search" />
          <span className="mock-filter" />
          <span className="mock-filter narrow" />
        </div>
        <div className="mock-product-grid">
          {[
            { name: "Produto Alpha", price: "R$ 890", stock: "124 un" },
            { name: "Produto Beta", price: "R$ 1.450", stock: "58 un" },
            { name: "Pacote Pro", price: "R$ 220", stock: "310 un" },
            { name: "Serviço Extra", price: "R$ 350", stock: "Sob demanda" },
          ].map((p) => (
            <div key={p.name} className="mock-product">
              <div className="mock-product-thumb" />
              <div className="mock-product-info">
                <strong>{p.name}</strong>
                <span className="accent">{p.price}</span>
                <small>{p.stock}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ClientsMock() {
  return (
    <div className="mock-screen" aria-hidden="true">
      <Chrome title="NEXAUT · Clientes" />
      <div className="mock-body mock-ops-body">
        <div className="mock-toolbar">
          <span className="mock-search" />
          <span className="mock-filter" />
        </div>
        <div className="mock-clients">
          {[
            { name: "Cliente 01", tag: "Ativo", tone: "ok", city: "Região Sul · 42 pedidos" },
            { name: "Cliente 02", tag: "VIP", tone: "gold", city: "Região Sudeste · 18 pedidos" },
            { name: "Cliente 03", tag: "Novo", tone: "ok", city: "Região Norte · 3 pedidos" },
            { name: "Cliente 04", tag: "Inativo", tone: "muted", city: "Região Centro · 0 pedidos" },
          ].map((c) => (
            <div key={c.name} className="mock-client-row">
              <div className="mock-avatar" />
              <div className="mock-client-copy">
                <strong>{c.name}</strong>
                <small>{c.city}</small>
              </div>
              <span className={`pill ${c.tone === "gold" ? "warn" : c.tone === "muted" ? "" : "ok"}`}>
                {c.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OpsMock() {
  return (
    <div className="mock-screen" aria-hidden="true">
      <Chrome title="NEXAUT · Sistema Operacional" />
      <div className="mock-body">
        <aside className="mock-rail">
          <div className="mock-rail-item is-on" />
          <div className="mock-rail-item" />
          <div className="mock-rail-item" />
          <div className="mock-rail-item" />
          <div className="mock-rail-item" />
        </aside>
        <div className="mock-main">
          <div className="mock-kpis">
            <div className="mock-kpi">
              <span className="mock-kpi-label">Operação</span>
              <span className="mock-kpi-value accent">98%</span>
              <span className="mock-kpi-trend up">SLA</span>
            </div>
            <div className="mock-kpi">
              <span className="mock-kpi-label">Fila</span>
              <span className="mock-kpi-value">36</span>
              <span className="mock-kpi-trend">tarefas</span>
            </div>
            <div className="mock-kpi">
              <span className="mock-kpi-label">Equipe</span>
              <span className="mock-kpi-value gold">12</span>
              <span className="mock-kpi-trend">online</span>
            </div>
          </div>
          <div className="mock-ops-modules">
            {["Pedidos", "Estoque", "Logística", "Dashboard", "Clientes", "Relatórios"].map(
              (mod, i) => (
                <div key={mod} className={`mock-module${i === 0 ? " is-active" : ""}`}>
                  {mod}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SystemMock({ kind }: { kind: MockKind }) {
  switch (kind) {
    case "dashboard":
      return <DashboardMock />;
    case "reports":
      return <ReportsMock />;
    case "stock":
      return <StockMock />;
    case "logistics":
      return <LogisticsMock />;
    case "products":
      return <ProductsMock />;
    case "clients":
      return <ClientsMock />;
    case "ops":
      return <OpsMock />;
  }
}

export type { MockKind };
