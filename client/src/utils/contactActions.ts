// Contact action utilities
export const contactData = {
  phone: "+91 9624913296",
  email: "cadarshanpanchasara@gmail.com",
  address: "C-301 LD Alexa, NR. Ananta Abode, OPP. Ganesh Genesis, Gota-Jagatpur Road, Jagatpur, Ahmedabad, Gujarat, 382470"
};

export const copyToClipboard = async (text: string, type: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return { success: true, message: `${type} copied to clipboard!` };
  } catch (err) {
    console.error('Failed to copy: ', err);
    return { success: false, message: `Failed to copy ${type}` };
  }
};

export const openPhone = (phoneNumber: string) => {
  window.open(`tel:${phoneNumber}`, '_self');
};

export const openEmail = (email: string) => {
  window.open(`mailto:${email}`, '_blank');
};

export const openMap = (address: string) => {
  const encodedAddress = encodeURIComponent(address);
  window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
};