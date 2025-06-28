from subprocess import run, PIPE


def ollama_out(disease:str) -> str:
    """
    Run the Ollama model using subprocess and capture the output.
    
    Returns:
        str: Output from the Ollama model.
    """
    result = run(['ollama', 'run', 'plantBuddy', disease], stdout=PIPE, stderr=PIPE, text=True)
    
    if result.returncode != 0:
        raise RuntimeError(f"Ollama command failed: {result.stderr}")
    
    return result.stdout.strip()

if __name__ == "__main__":
    r2 = ollama_out()
    print(f"Ollama model output: {r2}")