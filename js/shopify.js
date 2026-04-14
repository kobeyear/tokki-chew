// Tokki Chew Shopify Integration
// Using Shopify Storefront API GraphQL

const SHOPIFY_CONFIG = {
  domain: 'tokki-chew.myshopify.com',
  storefrontAccessToken: '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',
  apiVersion: '2026-04'
};

class TokkiChewShopify {
  constructor() {
    this.apiUrl = `https://${SHOPIFY_CONFIG.domain}/api/${SHOPIFY_CONFIG.apiVersion}/graphql.json`;
    this.headers = {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_CONFIG.storefrontAccessToken
    };
  }

  async query(query, variables = {}) {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({ query, variables })
      });
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Shopify API Error:', error);
      return null;
    }
  }

  async getProducts() {
    const query = `
      query getProducts {
        products(first: 10) {
          edges {
            node {
              id
              title
              handle
              description
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              variants(first: 10) {
                edges {
                  node {
                    id
                    title
                    priceV2 {
                      amount
                      currencyCode
                    }
                    availableForSale
                  }
                }
              }
              images(first: 5) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
      }
    `;

    return await this.query(query);
  }

  async createCheckout(lineItems) {
    const query = `
      mutation checkoutCreate($input: CheckoutCreateInput!) {
        checkoutCreate(input: $input) {
          checkout {
            id
            webUrl
            totalPriceV2 {
              amount
              currencyCode
            }
            lineItems(first: 5) {
              edges {
                node {
                  title
                  quantity
                }
              }
            }
          }
          checkoutUserErrors {
            field
            message
          }
        }
      }
    `;

    const variables = {
      input: {
        lineItems: lineItems
      }
    };

    return await this.query(query, variables);
  }

  // For now - redirect to waitlist instead of checkout
  joinWaitlist(email, productId) {
    console.log(`Adding ${email} to waitlist for product ${productId}`);
    
    // Show success message
    this.showWaitlistSuccess();
    
    // In production, you'd send this to your email service
    return { success: true, message: 'Added to waitlist successfully!' };
  }

  showWaitlistSuccess() {
    // Create modal or notification
    const modal = document.createElement('div');
    modal.className = 'waitlist-modal';
    modal.innerHTML = `
      <div class="waitlist-modal-content">
        <h3>🎉 You're on the list!</h3>
        <p>We'll notify you when Tokki Chew launches.</p>
        <p><strong>Founding members get 30% off!</strong></p>
        <button onclick="this.parentElement.parentElement.remove()">Close</button>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
      if (modal.parentNode) modal.remove();
    }, 3000);
  }
}

// Initialize Shopify integration
let tokkiShopify;

// Test connection on load
document.addEventListener('DOMContentLoaded', async () => {
  console.log('🛒 Tokki Chew Shopify Integration Loading...');
  
  try {
    tokkiShopify = new TokkiChewShopify();
    console.log('✅ Shopify class initialized');
    
    // Test API connection
    const products = await tokkiShopify.getProducts();
    if (products) {
      console.log('✅ Shopify API Connected:', products.data?.products?.edges?.length, 'products found');
    } else {
      console.error('❌ Shopify API Connection Failed');
    }
  } catch (error) {
    console.error('❌ Error initializing Shopify:', error);
    tokkiShopify = null;
  }
  
  // Test the button function
  console.log('🔧 Testing joinWaitlist function:', typeof window.joinWaitlist);
});

// Waitlist signup function - make sure it's global
window.joinWaitlist = function() {
  console.log('🎯 Join waitlist button clicked!');
  
  const email = prompt('Enter your email to join the launch waitlist:');
  if (email && email.includes('@')) {
    console.log('📧 Valid email entered:', email);
    
    // Show success modal directly (works even if Shopify fails)
    showWaitlistSuccess();
    
    // Try to use Shopify integration if available
    if (tokkiShopify) {
      tokkiShopify.joinWaitlist(email, 'tokki-chew');
    }
  } else if (email) {
    alert('Please enter a valid email address');
  }
};

// Simple success modal function
function showWaitlistSuccess() {
  // Create modal
  const modal = document.createElement('div');
  modal.className = 'waitlist-modal';
  modal.innerHTML = `
    <div class="waitlist-modal-content">
      <h3>🎉 You're on the list!</h3>
      <p>We'll notify you when Tokki Chew launches.</p>
      <p><strong>Founding members get 30% off!</strong></p>
      <button onclick="this.parentElement.parentElement.remove()">Close</button>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (modal.parentNode) modal.remove();
  }, 5000);
}

// Also define it directly for compatibility
function joinWaitlist() {
  window.joinWaitlist();
}