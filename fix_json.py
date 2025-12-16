import json
import sys

try:
    with open('client-config.json', 'r') as f:
        data = json.load(f)
    
    if isinstance(data, list) and len(data) > 0:
        config = data[0]
    else:
        config = data
        
    with open('client-config-fixed.json', 'w') as f:
        json.dump(config, f, indent=2)
        
    print("Fixed JSON saved to client-config-fixed.json")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
