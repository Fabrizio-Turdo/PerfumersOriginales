
export async function createCheckout(order){
  await new Promise(r => setTimeout(r, 800)); // mock
  return { init_point: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=TEST-123" };
}
