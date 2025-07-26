/**
 * Async/Await Error Handling Challenge
 * 
 * This challenge tests your ability to handle asynchronous operations,
 * implement proper error handling, and create robust API integration.
 * 
 * Your task:
 * 1. Implement fetchUserData with proper error handling
 * 2. Implement fetchUserPosts with basic error handling
 * 3. Implement fetchUserProfile with basic error handling
 * 4. Ensure all errors are properly caught and handled
 * 
 * API Endpoints:
 * - https://jsonplaceholder.typicode.com/users/{id} - User data
 * - https://jsonplaceholder.typicode.com/posts?userId={id} - User posts
 */

class ApiClient {
  constructor() {
    this.baseURL = 'https://jsonplaceholder.typicode.com';
    this.maxRetries = 3;
    this.timeout = 5000; // 5 seconds
  }

  /**
   * TODO: Implement fetchUserData with proper error handling
   * 
   * @param {number} userId - The user ID to fetch
   * @returns {Promise<Object>} User data
   */
  async fetchUserData(userId) {
    // TODO: Implement this method
  }

  /**
   * TODO: Implement fetchUserPosts
   * 
   * - Make API call to fetch user posts
   * 
   * @param {number} userId - The user ID to fetch posts for
   * @returns {Promise<Array>} Array of user posts
   */
  async fetchUserPosts(userId) {
    // TODO: Implement this method
  }
}

/**
 * Test runner for the challenge
 */
class ChallengeTester {
  constructor() {
    this.apiClient = new ApiClient();
    this.testResults = [];
  }

  async runTests() {
    console.log('🚀 Async/Await Error Handling Challenge');
    console.log('=======================================');
    console.log('Testing your implementations...\n');

    try {
      await this.testSuccessfulCall();
      
      await this.testErrorHandling();
      
      await this.testPosts();
      
      await this.testEdgeCases();

    } catch (error) {
      console.error('❌ Test runner error:', error.message);
    }

    this.printResults();
  }

  async testSuccessfulCall() {
    console.log('📋 Test 1: Successful API call');
    try {
      const userData = await this.apiClient.fetchUserData(1);
      if (userData && userData.id === 1) {
        console.log('✅ fetchUserData: Successfully fetched user data');
        this.testResults.push({ test: 'Successful API call', passed: true });
      } else {
        console.log('❌ fetchUserData: Invalid response format');
        this.testResults.push({ test: 'Successful API call', passed: false });
      }
    } catch (error) {
      console.log('❌ fetchUserData: Unexpected error:', error.message);
      this.testResults.push({ test: 'Successful API call', passed: false });
    }
  }

  async testErrorHandling() {
    console.log('\n📋 Test 2: Error handling');
    try {
      await this.apiClient.fetchUserData(999); // Non-existent user
      console.log('❌ fetchUserData: Should have thrown error for non-existent user');
      this.testResults.push({ test: 'Error handling', passed: false });
    } catch (error) {
      if (error.message.includes('not found') || error.message.includes('404')) {
        console.log('✅ fetchUserData: Properly handled non-existent user');
        this.testResults.push({ test: 'Error handling', passed: true });
      } else {
        console.log('❌ fetchUserData: Unexpected error type:', error.message);
        this.testResults.push({ test: 'Error handling', passed: false });
      }
    }
  }

  async testPosts() {
    console.log('\n📋 Test 3: Posts API call');
    try {
      const posts = await this.apiClient.fetchUserPosts(1);
      if (Array.isArray(posts) && posts.length > 0) {
        console.log('✅ fetchUserPosts: Successfully fetched posts');
        this.testResults.push({ test: 'Posts API call', passed: true });
      } else {
        console.log('❌ fetchUserPosts: Invalid response format');
        this.testResults.push({ test: 'Posts API call', passed: false });
      }
    } catch (error) {
      console.log('❌ fetchUserPosts: Unexpected error:', error.message);
      this.testResults.push({ test: 'Posts API call', passed: false });
    }
  }

  async testEdgeCases() {
    console.log('\n📋 Test 6: Edge cases');
    try {
      // Test with invalid user ID
      await this.apiClient.fetchUserData(-1);
      console.log('❌ fetchUserData: Should handle invalid user ID');
      this.testResults.push({ test: 'Edge cases', passed: false });
    } catch (error) {
      console.log('✅ fetchUserData: Properly handled invalid user ID');
      this.testResults.push({ test: 'Edge cases', passed: true });
    }
  }

  printResults() {
    console.log('\n📊 Test Results Summary');
    console.log('======================');
    
    const passed = this.testResults.filter(r => r.passed).length;
    const total = this.testResults.length;
    
    this.testResults.forEach(result => {
      const status = result.passed ? '✅' : '❌';
      console.log(`${status} ${result.test}`);
    });
    
    console.log(`\n🎯 Overall Score: ${passed}/${total} tests passed`);
    
    if (passed === total) {
      console.log('🎉 Congratulations! All tests passed!');
    } else {
      console.log('💡 Review the failed tests and improve your implementation.');
    }
  }
}

/**
 * Main function to run the challenge
 */
async function main() {
  console.log('Async/Await Error Handling Challenge');
  console.log('====================================');
  console.log('Implement the TODO methods in ApiClient class');
  console.log('Run with: node async_error_challenge.js\n');
  
  const tester = new ChallengeTester();
  await tester.runTests();
}

// Run the challenge
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  ApiClient,
  ChallengeTester
}; 