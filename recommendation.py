import json
with open('diseases.json', 'r', encoding='utf-8') as f:
    diseases = json.loads(f.read())
def get_recs(disease_name:str, lang='english'):
    """
    Get recommendations for a given disease name in the specified language.
    
    Args:
        disease_name (str): The name of the disease.
        lang (str): Language code for the recommendations (default is 'english').
        
    Returns:
        list: List of recommendations in the specified language.
    """
    
    recomendations = [recom["recommendations"] for recom in diseases if recom.get('disease_name').lower() == disease_name.lower()]
    
    return recomendations[0] if recomendations else ["No recommendations available for this disease."]