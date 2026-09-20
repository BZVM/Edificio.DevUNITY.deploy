import React from 'react';

type AllowedStatus = 'pending' | 'completed' | 'failed';

interface PaymentStatusProps {
  status: AllowedStatus;
  retryCount?: number;
}

export const PaymentStatus: React.FC<PaymentStatusProps> = ({
  status,
  retryCount = 0,
}) => {
  // Manejo de variables públicas sin exponer secretos
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.dominio.com';

  return (
    <section aria-label="Resumen de pago" className="payment-status-card">
      <h3>Estado de Transacción</h3>
      <p>
        Estado actual: <strong>{status}</strong>
      </p>
      {retryCount > 0 && <p>Intentos realizados: {retryCount}</p>}
      <small>Servicio conectado a: {apiUrl}</small>
    </section>
  );
};
