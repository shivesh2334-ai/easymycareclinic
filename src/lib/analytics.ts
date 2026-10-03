export type AnalyticsEvent =
  | "call_click"
  | "whatsapp_click"
  | "callback_submitted"
  | "booking_confirmed";

type EventParameters = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends only deliberately supplied, non-sensitive analytics parameters.
 * Never pass form values, phone numbers, appointment details, or free text.
 */
export function trackEvent(
  eventName: AnalyticsEvent,
  parameters: EventParameters = {},
) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, parameters);
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: eventName, ...parameters });
}
