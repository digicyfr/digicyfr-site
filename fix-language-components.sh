# Copy and paste the script content#!/bin/bash

# Script to fix TypeScript and Image optimization issues in language-specific components
# Author: Assistant
# Purpose: Fix ContactSection 'any' types and PartnersSection img tags

PROJECT_ROOT="/workspaces/cyfr"
LANG_DIRS=("de" "fr" "pl")

echo "🔧 Starting to fix language-specific component issues..."
echo "📁 Project root: $PROJECT_ROOT"

# Check if project directory exists
if [ ! -d "$PROJECT_ROOT" ]; then
    echo "❌ Error: Project directory $PROJECT_ROOT does not exist!"
    exit 1
fi

# Function to check if file exists and is writable
check_file() {
    local file="$1"
    if [ ! -f "$file" ]; then
        echo "⚠️  Warning: File $file does not exist, skipping..."
        return 1
    fi
    if [ ! -w "$file" ]; then
        echo "⚠️  Warning: File $file is not writable, skipping..."
        return 1
    fi
    return 0
}

# Function to fix ContactSection files (replace 'any' with 'unknown')
fix_contact_section() {
    local file="$1"
    echo "🩹 Fixing ContactSection: $file"
    
    if check_file "$file"; then
        # Replace 'any' type with 'unknown' in catch blocks
        sed -i 's/} catch (error: any) {/} catch (error: unknown) {/g' "$file"
        
        # Also fix error handling lines if they exist
        sed -i 's/error && typeof error === '\''object'\'' && '\''text'\'' in error/error \&\& typeof error === '\''object'\'' \&\& '\''text'\'' in error/g' "$file"
        
        echo "✅ Fixed TypeScript 'any' types in $file"
    fi
}

# Function to fix PartnersSection files (replace img with Image)
fix_partners_section() {
    local file="$1"
    echo "🖼️  Fixing PartnersSection: $file"
    
    if check_file "$file"; then
        # Check if Image import already exists
        if ! grep -q "import Image from 'next/image'" "$file"; then
            # Add Image import at the top after 'use client'
            sed -i "/^'use client';/a import Image from 'next/image';" "$file"
            echo "✅ Added Image import to $file"
        fi
        
        # Create a backup of the original img tag replacement
        # This is a complex replacement, so we'll do it step by step
        
        # First, let's create a temporary file with the new Image component
        temp_image_component=$(cat << 'EOF'
                <Image 
                  src={client.logo}
                  alt={\`\${client.name} logo\`}
                  width={90}
                  height={70}
                  style={{
                    maxWidth: '90px',
                    maxHeight: '70px',
                    objectFit: 'contain',
                    width: 'auto',
                    height: 'auto'
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
EOF
)
        
        # Replace the img tag with Image component
        # This is a simplified replacement - might need manual adjustment
        sed -i 's/<img/<Image/g' "$file"
        
        echo "✅ Updated img tags to Image components in $file"
        echo "⚠️  Note: You may need to manually verify the Image component props"
    fi
}

# Function to process each language directory
process_language_dir() {
    local lang="$1"
    local lang_dir="$PROJECT_ROOT/src/components/home/$lang"
    
    echo ""
    echo "🌍 Processing language: $lang"
    echo "📂 Directory: $lang_dir"
    
    if [ ! -d "$lang_dir" ]; then
        echo "⚠️  Warning: Language directory $lang_dir does not exist, skipping..."
        return
    fi
    
    # Fix ContactSection files
    local contact_file="$lang_dir/ContactSection${lang}.tsx"
    if [ -f "$contact_file" ]; then
        fix_contact_section "$contact_file"
    else
        echo "ℹ️  No ContactSection file found for $lang"
    fi
    
    # Fix PartnersSection files
    local partners_file="$lang_dir/PartnersSection${lang}.tsx"
    if [ -f "$partners_file" ]; then
        fix_partners_section "$partners_file"
    else
        echo "ℹ️  No PartnersSection file found for $lang"
    fi
}

# Main execution
echo "🚀 Starting fixes for language-specific components..."

# Process each language directory
for lang in "${LANG_DIRS[@]}"; do
    process_language_dir "$lang"
done

echo ""
echo "🎉 All fixes completed!"
echo ""
echo "📋 Summary of changes made:"
echo "   • Fixed TypeScript 'any' types in ContactSection files"
echo "   • Added Image imports to PartnersSection files"
echo "   • Replaced img tags with Image components"
echo ""
echo "⚡ Next steps:"
echo "   1. Run 'npm run build' to check if all errors are resolved"
echo "   2. Manually review the Image component replacements if needed"
echo "   3. Test the application to ensure everything works correctly"
echo ""

# Optional: Run build to check for remaining issues
read -p "🔨 Would you like to run 'npm run build' now to check for issues? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🏗️  Running npm run build..."
    cd "$PROJECT_ROOT" && npm run build
fi
