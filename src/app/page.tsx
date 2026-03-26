export default function UnderConstructionPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)",
        color: "#ffffff",
        fontFamily: "var(--font-geist-sans), sans-serif",
        textAlign: "center",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      {/* Logo / Brand */}
      <div style={{ marginBottom: "2.5rem", position: "relative" }}>
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
            fontSize: "2rem",
            fontWeight: "800",
            letterSpacing: "-1px",
            boxShadow: "0 0 40px rgba(99,102,241,0.4)",
          }}
        >
          C3
        </div>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: "800",
            margin: 0,
            letterSpacing: "-2px",
            background: "linear-gradient(90deg, #ffffff, #a5b4fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Cell33
        </h1>
      </div>

      {/* Under Construction Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "rgba(99,102,241,0.15)",
          border: "1px solid rgba(99,102,241,0.4)",
          borderRadius: "999px",
          padding: "0.4rem 1.2rem",
          fontSize: "0.8rem",
          fontWeight: "600",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#a5b4fc",
          marginBottom: "2rem",
        }}
      >
        <span style={{ fontSize: "1rem" }}>🚧</span>
        Under Construction
      </div>

      {/* Message */}
      <p
        style={{
          fontSize: "clamp(1rem, 3vw, 1.25rem)",
          color: "rgba(255,255,255,0.6)",
          maxWidth: "480px",
          lineHeight: "1.7",
          margin: "0 0 3rem",
        }}
      >
        Something exciting is on the way. We&apos;re working hard to bring you an amazing experience. Check back soon!
      </p>

      {/* Divider */}
      <div
        style={{
          width: "60px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, #6366f1, transparent)",
          marginBottom: "2rem",
        }}
      />

      {/* Footer note */}
      <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.25)", margin: 0 }}>
        &copy; {new Date().getFullYear()} Cell33. All rights reserved.
      </p>
    </main>
  );
}

