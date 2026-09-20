import React, { useState } from 'react';

// 1. FALLA GITLEAKS: Token con formato reconocible (clave falsa de prueba)
const STRIPE_SECRET_KEY = "sk_test_51Mz00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";

export const PaymentStatus = ({ status }: { status: string }) => {
  // 2. FALLA TYPESCRIPT / LINT: Variable tipada incorrectamente y no utilizada
  const retryCount: number = "tres"; // Type 'string' is not assignable to type 'number'
  const unusedVariable = 42;         // Falla @typescript-eslint/no-unused-vars

  const rawHtmlWarning = `<p>Alerta: el pago está en estado: ${status}</p>`;

  return (
    <div>
      <h3>Estado de Transacción</h3>
      {/* 3. FALLA SAST (Semgrep / CodeQL): Inyección XSS mediante innerHTML */}
      <div dangerouslySetInnerHTML={{ __html: rawHtmlWarning }} />
      
      <p>Clave interna: {STRIPE_SECRET_KEY}</p>
    </div>
  );
};
