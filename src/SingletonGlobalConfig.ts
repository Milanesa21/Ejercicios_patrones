class ConfiguracionGlobal {
    private static instancia: ConfiguracionGlobal;
    private idioma!: string
    private rutaBaseDatos!: string
    private nivelRegistro!: string
    
    private constructor() {}

    public static getInstancia(): ConfiguracionGlobal {
        if (!ConfiguracionGlobal.instancia) {
            ConfiguracionGlobal.instancia = new ConfiguracionGlobal();
        }
        return ConfiguracionGlobal.instancia
    }

    public nuevaConfiguracion(idioma: string, rutaBaseDatos: string, nivelRegistro: string): void {
        this.idioma = idioma;
        this.rutaBaseDatos = rutaBaseDatos;
        this.nivelRegistro = nivelRegistro;
    }

    public cambiarConfiruacion( idioma: string, rutaBaseDatos: string, nivelRegistro: string): void {
        this.idioma = idioma;
        this.rutaBaseDatos = rutaBaseDatos;
        this.nivelRegistro = nivelRegistro;
        console.log('Nueva configuración', ConfiguracionGlobal.instancia);
    }

    public mostrarConfiguracion(): void {
        console.log('Configuración actual: ',  ConfiguracionGlobal.instancia);
    }
}

const configuracion = ConfiguracionGlobal.getInstancia();
configuracion.nuevaConfiguracion('es','localhost','debug');
configuracion.mostrarConfiguracion();
configuracion.cambiarConfiruacion('en','aña', 'info');
configuracion.mostrarConfiguracion();
const config = ConfiguracionGlobal.getInstancia();
config.nuevaConfiguracion('jp', 'localhost', 'wololo');
config === configuracion ? console.log('Misma instancia') : console.log('Distinta instancia');