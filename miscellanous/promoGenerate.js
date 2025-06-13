const usedPromoCodes = new Set();

// Function to generate a random 6-character promo code
export default function generatePromoCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    // Ensure uniqueness
    if (usedPromoCodes.has(code)) {
        return generatePromoCode(); // Recursively generate a new code if duplicate
    }
    usedPromoCodes.add(code);
    return code; // Add this line to return the generated promo code
}
