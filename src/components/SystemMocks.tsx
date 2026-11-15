type MockKind = "stock" | "logistics" | "products" | "clients" | "ops";

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
            { sku: "Cabo 2,5mm", stock: 82, status: "ok", label: "Separado" },
            { sku: "Disjuntor 20A", stock: 9, status: "warn", label: "Baixo" },
            { sku: "Tomada 20A", stock: 140, status: "ok", label: "Faturado" },
            { sku: "LED 12W", stock: 3, status: "danger", label: "Crítico" },
            { sku: "Quadro 12p", stock: 44, status: "ok", label: "Enviado" },
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
            { name: "Kit Residencial", price: "R$ 890", stock: "124 un" },
            { name: "Kit Comercial", price: "R$ 1.450", stock: "58 un" },
            { name: "Módulo Extra", price: "R$ 220", stock: "310 un" },
            { name: "Serviço Inst.", price: "R$ 350", stock: "Sob demanda" },
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
            { name: "Cliente A", tag: "Ativo", tone: "ok", city: "SP · 42 pedidos" },
            { name: "Cliente B", tag: "VIP", tone: "gold", city: "MG · 18 pedidos" },
            { name: "Cliente C", tag: "Novo", tone: "ok", city: "RJ · 3 pedidos" },
            { name: "Cliente D", tag: "Inativo", tone: "muted", city: "PR · 0 pedidos" },
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
            {["Pedidos", "Estoque", "Logística", "Financeiro", "Clientes", "Relatórios"].map(
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
