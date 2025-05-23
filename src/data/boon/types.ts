import { BoonRarityType } from "../boonRarityType";
import { BoonSlot } from "../boonSlot";
import { GodId } from "../god";
import { RunState } from "../runState";
import { BoonRequirementsTest } from "./requirementsTests";

export enum BoonId {
    Aphrodite_Attack,
    Aphrodite_Special,
    Aphrodite_Cast,
    Aphrodite_CastAlternate,
    Aphrodite_Dash,
    Aphrodite_Aid,
    Aphrodite_DyingLament,
    Aphrodite_WaveOfDespair,
    Aphrodite_DifferentLeague,
    Aphrodite_LifeAffirmation,
    Aphrodite_EmptyInside,
    Aphrodite_SweetSurrender,
    Aphrodite_BrokenResolve,
    Aphrodite_BlownKiss,
    Aphrodite_Legendary,
    Ares_Attack,
    Ares_Special,
    Ares_Cast,
    Ares_CastAlternate,
    Ares_Dash,
    Ares_Aid,
    Ares_CurseOfVengeance,
    Ares_UrgeToKill,
    Ares_BattleRage,
    Ares_BloodFrenzy,
    Ares_BlackMetal,
    Ares_EngulfingVortex,
    Ares_DireMisfortune,
    Ares_ImpendingDoom,
    Ares_Legendary,
    Artemis_Attack,
    Artemis_Special,
    Artemis_Cast,
    Artemis_CastAlternate,
    Artemis_Dash,
    Artemis_Aid,
    Artemis_PressurePoints,
    Artemis_ExitWounds,
    Artemis_HideBreaker,
    Artemis_CleanKill,
    Artemis_HunterInstinct,
    Artemis_HuntersMark,
    Artemis_SupportFire,
    Artemis_Legendary,
    Athena_Attack,
    Athena_Special,
    Athena_Cast,
    Athena_CastAlternate,
    Athena_Dash,
    Athena_Aid,
    Athena_HolyShield,
    Athena_BronzeSkin,
    Athena_SureFooting,
    Athena_ProudBearing,
    Athena_BlindingFlash,
    Athena_BrilliantRiposte,
    Athena_DeathlessStand,
    Athena_LastStand,
    Athena_Legendary,
    Demeter_Attack,
    Demeter_Special,
    Demeter_Cast,
    Demeter_CastAlternate,
    Demeter_Dash,
    Demeter_Aid,
    Demeter_FrozenTouch,
    Demeter_RareCrop,
    Demeter_RavenousWill,
    Demeter_NourishedSoul,
    Demeter_SnowBurst,
    Demeter_ArcticBlast,
    Demeter_KillingFreeze,
    Demeter_GlacialGlare,
    Demeter_Legendary,
    Dionysus_Attack,
    Dionysus_Special,
    Dionysus_Cast,
    Dionysus_CastAlternate,
    Dionysus_Dash,
    Dionysus_Aid,
    Dionysus_AfterParty,
    Dionysus_PositiveOutlook,
    Dionysus_PremiumVintage,
    Dionysus_StrongDrink,
    Dionysus_BadInfluence,
    Dionysus_NumbingSensation,
    Dionysus_PeerPressure,
    Dionysus_HighTolerance,
    Dionysus_Legendary,
    Poseidon_Attack,
    Poseidon_Special,
    Poseidon_Cast,
    Poseidon_CastAlternate,
    Poseidon_Dash,
    Poseidon_Aid,
    Poseidon_TyphoonsFury,
    Poseidon_HydraulicMight,
    Poseidon_OceansBounty,
    Poseidon_SunkenTreasure,
    Poseidon_RazorShoals,
    Poseidon_BoilingPoint,
    Poseidon_BreakingWave,
    Poseidon_WavePounding,
    Poseidon_RipCurrent,
    Poseidon_Legendary_HugeCatch,
    Poseidon_Legendary_SecondWave,
    Zeus_Attack,
    Zeus_Special,
    Zeus_Cast,
    Zeus_CastAlternate,
    Zeus_Dash,
    Zeus_Aid,
    Zeus_HeavensVengeance,
    Zeus_LightningReflexes,
    Zeus_StormLightning,
    Zeus_HighVoltage,
    Zeus_DoubleStrike,
    Zeus_StaticDischarge,
    Zeus_CloudedJudgment,
    Zeus_BillowingStrength,
    Zeus_Legendary,
    Hermes_SwiftStrike,
    Hermes_SwiftFlourish,
    Hermes_FlurryCast,
    Hermes_QuickFavor,
    Hermes_HyperSprint,
    Hermes_GreaterHaste,
    Hermes_QuickRecovery,
    Hermes_GreaterEvasion,
    Hermes_GreatestReflex,
    Hermes_SecondWind,
    Hermes_QuickReload,
    Hermes_SideHustle,
    Hermes_RushDelivery,
    Hermes_AutoReload,
    Hermes_Legendary_GreaterRecall,
    Hermes_Legendary_BadNews,
    Duo_Aphrodite_Ares,
    Duo_Aphrodite_Artemis,
    Duo_Aphrodite_Athena,
    Duo_Aphrodite_Demeter,
    Duo_Aphrodite_Dionysus,
    Duo_Aphrodite_Poseidon,
    Duo_Aphrodite_Zeus,
    Duo_Ares_Artemis,
    Duo_Ares_Athena,
    Duo_Ares_Demeter,
    Duo_Ares_Dionysus,
    Duo_Ares_Poseidon,
    Duo_Ares_Zeus,
    Duo_Artemis_Athena,
    Duo_Artemis_Demeter,
    Duo_Artemis_Dionysus,
    Duo_Artemis_Poseidon,
    Duo_Artemis_Zeus,
    Duo_Athena_Demeter,
    Duo_Athena_Dionysus,
    Duo_Athena_Poseidon,
    Duo_Athena_Zeus,
    Duo_Demeter_Dionysus,
    Duo_Demeter_Poseidon,
    Duo_Demeter_Zeus,
    Duo_Dionysus_Poseidon,
    Duo_Dionysus_Zeus,
    Duo_Poseidon_Zeus,
};

export interface Boon {
    id: BoonId;
    name: string;
    description: string;
    godId: GodId | Array<GodId>;
    slot?: BoonSlot;
    rarityType?: BoonRarityType;
    pommable?: boolean;
    testRunAvailability?: (runState: RunState) => boolean;
    testRequirements?: (runState: RunState) => boolean;
    iconPath: string;
};
