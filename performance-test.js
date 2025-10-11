const http = require('http');

const testUrls = [
  'http://localhost:3000/en',
  'http://localhost:3000/fr',
  'http://localhost:3000/it'
];

async function testPerformance(url) {
  return new Promise((resolve) => {
    const startTime = Date.now();
    
    http.get(url, (res) => {
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      
      console.log(`✅ ${url} - ${responseTime}ms - Status: ${res.statusCode}`);
      resolve({ url, responseTime, statusCode: res.statusCode });
    }).on('error', (err) => {
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      console.log(`❌ ${url} - ${responseTime}ms - Error: ${err.message}`);
      resolve({ url, responseTime, error: err.message });
    });
  });
}

async function runPerformanceTest() {
  console.log('🚀 Starting Performance Test...\n');
  
  const results = [];
  
  for (const url of testUrls) {
    const result = await testPerformance(url);
    results.push(result);
  }
  
  console.log('\n📊 Performance Summary:');
  const successfulTests = results.filter(r => !r.error);
  const avgResponseTime = successfulTests.length > 0 
    ? successfulTests.reduce((sum, r) => sum + r.responseTime, 0) / successfulTests.length 
    : 0;
  
  console.log(`Average Response Time: ${avgResponseTime.toFixed(2)}ms`);
  console.log(`Successful Tests: ${successfulTests.length}/${testUrls.length}`);
  
  if (avgResponseTime < 1000) {
    console.log('🎉 Excellent performance!');
  } else if (avgResponseTime < 2000) {
    console.log('👍 Good performance!');
  } else {
    console.log('⚠️  Performance needs improvement');
  }
}

runPerformanceTest();
