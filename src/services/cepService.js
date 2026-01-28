const BASE_URL = 'https://brasilapi.com.br/api/cep/v1';

export const buscarCEP = async (cep) => {
    try {
        const resp = await fetch(`${BASE_URL}/${cep}`);
        
        if (!resp.ok) {
            throw new Error('CEP não encontrado');
        }
        
        const dados = await resp.json();
        return {
            sucesso: true,
            dados: dados,
            erro: null
        };
    } catch (error) {
        return {
            sucesso: false,
            dados: null,
            erro: error.message || 'Erro ao buscar CEP'
        };
    }
};

export const limparCEP = (cep) => {
    return cep.replace(/\D/g, '');
};

export const validarCEP = (cep) => {
    const cepLimpo = limparCEP(cep);
    return cepLimpo.length === 8;
};

export const formatarCEP = (cep) => {
    if (cep.length <= 5) return cep;
    return `${cep.slice(0, 5)}-${cep.slice(5, 8)}`;
};
