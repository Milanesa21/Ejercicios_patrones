class BaseConexion {
    private static instancia: BaseConexion;
    private DB_DRIVER!: string
    private DB_HOST!: string
    private DB_PORT!: number
    private DB_USER!: string
    private DB_PASS!: string
    private DB_NAME!: string

    private constructor() {}

    public static getInstancia(): BaseConexion {
        if (!BaseConexion.instancia) {
            BaseConexion.instancia = new BaseConexion();
        }
        return BaseConexion.instancia
}

public nuevaConexion(DB_DRIVER: string, DB_HOST: string, DB_PORT: number, DB_USER: string, DB_PASS: string, DB_NAME: string): void {
    this.DB_DRIVER = DB_DRIVER;
    this.DB_HOST = DB_HOST;
    this.DB_PORT = DB_PORT;
    this.DB_USER = DB_USER;
    this.DB_PASS = DB_PASS;
    this.DB_NAME = DB_NAME;

    console.log('Nueva conexión', BaseConexion.instancia);
}

public desconexion (): void {
    console.log(`Desconectado de ${this.DB_NAME}`);
}}

const conexion = BaseConexion.getInstancia();
conexion.nuevaConexion('postgres', 'localhost', 5432, 'admin','aña','base1')
conexion.desconexion();
const coñexion = BaseConexion.getInstancia();
coñexion.nuevaConexion('mysql', 'visitantehost', 2345, 'adminn','añañin','base2')
coñexion === conexion ? console.log('Misma instancia') : console.log('Distinta instancia');