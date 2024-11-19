# Bolt AI Chat Interface

## Project Overview
Bolt is an AI chat interface project that provides a clean and efficient way to interact with AI models. The project uses a structured approach to handle prompts, configurations, and chat interactions.

## Project Structure
```
.
├── .bolt/
│   ├── prompt         # System prompt file defining AI assistant behavior
│   └── config.json    # Configuration settings for the application
├── src/
│   ├── components/    # React components
│   └── ...           # Other source files
└── README.md
```

## Key Components

### Configuration (.bolt/config.json)
Contains essential configuration settings for the application, including:
- API endpoints
- Model settings
- Interface preferences

### System Prompt (.bolt/prompt)
Defines the behavior and capabilities of the AI assistant, including:
- Response formatting rules
- Code editing conventions
- Language handling preferences

## Getting Started

1. **Installation**

## Development Guidelines

### Adding New Components
1. Create new component files in `src/components/`
2. Follow the existing component structure
3. Import and use components as needed

### Modifying AI Behavior
1. Edit `.bolt/prompt` to modify AI assistant behavior
2. Follow the prompt formatting guidelines
3. Test changes thoroughly before deployment

### Code Editing Conventions
When working with code blocks, follow these conventions:
- Use language identifiers with file paths: ```language:path/to/file
- Include context around code changes
- Use comments to indicate unchanged sections

## Best Practices
1. Keep components modular and focused
2. Follow consistent naming conventions
3. Document significant changes
4. Test AI interactions thoroughly

## Troubleshooting
Common issues and solutions:
1. **Configuration Issues**
   - Verify config.json format
   - Check API key validity
   
2. **Prompt Behavior**
   - Review prompt file formatting
   - Ensure system instructions are clear

## Contributing
1. Fork the repository
2. Create a feature branch
3. Submit a pull request with detailed description

